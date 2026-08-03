"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { FileUpload } from "@/components/forms/FileUpload";
import { services } from "@/data/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

function buildSchema(dict: Dictionary) {
  return z.object({
    name: z.string().min(2, dict.common.required),
    company: z.string().optional(),
    email: z.string().email(dict.forms.invalidEmail ?? "Invalid email"),
    phone: z.string().min(6, dict.common.required),
    service: z.string().min(1, dict.common.required),
    budget: z.string().optional(),
    deadline: z.string().optional(),
    message: z.string().min(10, dict.common.required),
    privacy: z.boolean().refine((v) => v === true, {
      message: dict.forms.privacyRequired ?? dict.common.required,
    }),
  });
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

interface QuoteFormProps {
  locale: Locale;
  dict: Dictionary;
  defaultService?: string;
  defaultPackage?: string;
}

export function QuoteForm({
  locale,
  dict,
  defaultService,
  defaultPackage,
}: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [files, setFiles] = useState<File[]>([]);
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
        if (v !== undefined && v !== null) formData.append(k, String(v));
      });
      formData.append("locale", locale);
      files.forEach((f) => formData.append("files", f));

      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      reset();
      setFiles([]);
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full border border-ink-black/15 bg-paper-white px-3.5 py-2.5 text-sm text-ink-black outline-none transition-colors placeholder:text-ink-black/35 focus:border-brand-red focus:ring-1 focus:ring-brand-red/30";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.forms.name} error={errors.name?.message}>
          <input {...register("name")} className={field} placeholder={dict.forms.namePlaceholder} autoComplete="name" />
        </Field>
        <Field label={dict.forms.company}>
          <input {...register("company")} className={field} placeholder={dict.forms.companyPlaceholder} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.forms.email} error={errors.email?.message}>
          <input type="email" {...register("email")} className={field} placeholder={dict.forms.emailPlaceholder} autoComplete="email" />
        </Field>
        <Field label={dict.forms.phone} error={errors.phone?.message}>
          <input {...register("phone")} className={field} placeholder={dict.forms.phonePlaceholder} autoComplete="tel" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.forms.service} error={errors.service?.message}>
          <select {...register("service")} className={cn(field, "bg-paper-white")}>
            <option value="">{dict.forms.servicePlaceholder}</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title[locale]}
              </option>
            ))}
            {defaultPackage && <option value={defaultPackage}>Package: {defaultPackage}</option>}
          </select>
        </Field>
        <Field label={dict.forms.budget}>
          <input {...register("budget")} className={field} placeholder={dict.forms.budgetPlaceholder} />
        </Field>
      </div>
      <Field label={dict.forms.deadline ?? "Deadline"}>
        <input type="date" {...register("deadline")} className={field} />
      </Field>
      <Field label={dict.forms.message} error={errors.message?.message}>
        <textarea {...register("message")} rows={5} className={cn(field, "resize-y")} placeholder={dict.forms.messagePlaceholder} />
      </Field>

      <FileUpload label={dict.forms.upload ?? "Upload file"} onChange={setFiles} />

      <label className="flex items-start gap-3 text-sm text-ink-black/70">
        <input type="checkbox" {...register("privacy")} className="mt-1 accent-brand-red" />
        <span>{dict.forms.privacy}</span>
      </label>
      {errors.privacy && (
        <p className="text-xs text-brand-red">{errors.privacy.message}</p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? dict.common.loading : dict.forms.submitQuote}
      </Button>

      {status === "success" && (
        <p role="status" className="border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-sm">
          {dict.forms.successQuote}
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
