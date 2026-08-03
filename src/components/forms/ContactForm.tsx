"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

function buildSchema(dict: Dictionary) {
  return z.object({
    name: z.string().min(2, dict.common.required),
    email: z.string().email(),
    phone: z.string().optional(),
    company: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, dict.common.required),
  });
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

interface ContactFormProps {
  locale: Locale;
  dict: Dictionary;
  defaultService?: string;
  defaultPackage?: string;
  variant?: "contact" | "quote";
}

export function ContactForm({
  locale,
  dict,
  defaultService,
  defaultPackage,
  variant = "contact",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const schema = buildSchema(dict);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema) as any,
    defaultValues: {
      service: defaultService || defaultPackage || "",
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (v) formData.append(k, String(v));
      });
      formData.append("type", variant);
      formData.append("locale", locale);
      const res = await fetch("/api/quote", { method: "POST", body: formData });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full border border-ink-black/15 bg-paper-white px-3.5 py-2.5 text-sm text-ink-black outline-none transition-colors placeholder:text-ink-black/35 focus:border-brand-red focus:ring-1 focus:ring-brand-red/30";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.forms.name} error={errors.name?.message}>
          <input
            {...register("name")}
            className={fieldClass}
            placeholder={dict.forms.namePlaceholder}
            autoComplete="name"
          />
        </Field>
        <Field label={dict.forms.email} error={errors.email?.message}>
          <input
            type="email"
            {...register("email")}
            className={fieldClass}
            placeholder={dict.forms.emailPlaceholder}
            autoComplete="email"
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.forms.phone}>
          <input
            {...register("phone")}
            className={fieldClass}
            placeholder={dict.forms.phonePlaceholder}
            autoComplete="tel"
          />
        </Field>
        <Field label={dict.forms.company}>
          <input
            {...register("company")}
            className={fieldClass}
            placeholder={dict.forms.companyPlaceholder}
          />
        </Field>
      </div>
      <Field label={dict.forms.service}>
        <select {...register("service")} className={cn(fieldClass, "bg-paper-white")}>
          <option value="">{dict.forms.servicePlaceholder}</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title[locale]}
            </option>
          ))}
        </select>
      </Field>
      <Field label={dict.forms.message} error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          className={cn(fieldClass, "resize-y")}
          placeholder={dict.forms.messagePlaceholder}
        />
      </Field>
      <p className="text-xs text-ink-black/45">{dict.forms.privacy}</p>
      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting
          ? dict.common.loading
          : variant === "quote"
            ? dict.forms.submitQuote
            : dict.forms.submitContact}
      </Button>
      {status === "success" && (
        <p role="status" className="border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-sm">
          {variant === "quote" ? dict.forms.successQuote : dict.forms.successContact}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
          {dict.common.error}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-brand-red">{error}</span>}
    </label>
  );
}
