"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { FileUpload } from "@/components/forms/FileUpload";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

const langs = ["vi", "de", "en"] as const;
const langLabels: Record<(typeof langs)[number], string> = {
  vi: "Tiếng Việt",
  de: "Deutsch",
  en: "English",
};

function buildSchema(dict: Dictionary) {
  return z.object({
    name: z.string().min(2, dict.common.required),
    email: z.string().email(),
    phone: z.string().optional(),
    sourceLang: z.string().min(1, dict.common.required),
    targetLang: z.string().min(1, dict.common.required),
    docType: z.string().optional(),
    wordCount: z.string().optional(),
    deadline: z.string().optional(),
    content: z.string().optional(),
  });
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

export function TranslationForm({ dict }: { dict: Dictionary }) {
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
    defaultValues: { sourceLang: "vi", targetLang: "de" },
  });

  const field =
    "w-full border border-ink-black/15 bg-paper-white px-3.5 py-2.5 text-sm outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30";

  async function onSubmit(data: FormValues) {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (v) formData.append(k, String(v));
      });
      formData.append("type", "translation");
      files.forEach((f) => formData.append("files", f));
      const res = await fetch("/api/quote", { method: "POST", body: formData });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      reset({ sourceLang: "vi", targetLang: "de" });
      setFiles([]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.name}
          </span>
          <input {...register("name")} className={field} />
          {errors.name && (
            <span className="text-xs text-brand-red">{errors.name.message}</span>
          )}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.email}
          </span>
          <input type="email" {...register("email")} className={field} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
          {dict.forms.phone}
        </span>
        <input {...register("phone")} className={field} />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.sourceLang}
          </span>
          <select {...register("sourceLang")} className={field}>
            {langs.map((l) => (
              <option key={l} value={l}>
                {langLabels[l]}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.targetLang}
          </span>
          <select {...register("targetLang")} className={field}>
            {langs.map((l) => (
              <option key={l} value={l}>
                {langLabels[l]}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.docType}
          </span>
          <input {...register("docType")} className={field} placeholder="Menu, website…" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.wordCount}
          </span>
          <input {...register("wordCount")} className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.deadline}
          </span>
          <input type="date" {...register("deadline")} className={field} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
          {dict.forms.content}
        </span>
        <textarea
          {...register("content")}
          rows={6}
          className={cn(field, "resize-y font-mono text-[13px]")}
          placeholder={dict.forms.contentPlaceholder}
        />
      </label>
      <FileUpload label={dict.forms.upload} onChange={setFiles} />
      <p className="text-xs text-ink-black/50">
        Dịch công chứng (nếu cần) qua đối tác đủ điều kiện — không tự tuyên bố
        cung cấp công chứng trực tiếp.
      </p>
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? dict.common.loading : dict.forms.submitTranslation}
      </Button>
      {status === "success" && (
        <p className="border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-sm">
          {dict.forms.successTranslation}
        </p>
      )}
      {status === "error" && (
        <p className="border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
          {dict.common.error}
        </p>
      )}
    </form>
  );
}
