"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { FileUpload } from "@/components/forms/FileUpload";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

const products = [
  "Card visit",
  "Flyer",
  "Menu",
  "Poster",
  "Sticker",
  "Banner",
  "Roll-up",
  "Catalogue",
  "Other",
];

function buildSchema(dict: Dictionary) {
  return z.object({
    name: z.string().min(2, dict.common.required),
    company: z.string().optional(),
    email: z.string().email(),
    phone: z.string().min(6, dict.common.required),
    product: z.string().min(1, dict.common.required),
    size: z.string().optional(),
    quantity: z.string().optional(),
    material: z.string().optional(),
    dueDate: z.string().optional(),
    notes: z.string().optional(),
  });
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

export function PrintForm({ dict }: { dict: Dictionary }) {
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
  });

  const field =
    "w-full border border-ink-black/15 bg-paper-white px-3.5 py-2.5 text-sm outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30";

  async function onSubmit(data: FormValues) {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (v) formData.append(k, String(v));
      });
      formData.append("type", "print");
      files.forEach((f) => formData.append("files", f));
      const res = await fetch("/api/quote", { method: "POST", body: formData });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      reset();
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
          {errors.name && <span className="text-xs text-brand-red">{errors.name.message}</span>}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.company}
          </span>
          <input {...register("company")} className={field} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.email}
          </span>
          <input type="email" {...register("email")} className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.phone}
          </span>
          <input {...register("phone")} className={field} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.productType ?? "Product"}
          </span>
          <select {...register("product")} className={field}>
            <option value="">—</option>
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.size ?? "Size"}
          </span>
          <input {...register("size")} className={field} placeholder="A5, 85×55mm…" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.quantity ?? "Qty"}
          </span>
          <input {...register("quantity")} className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.material ?? "Material"}
          </span>
          <input {...register("material")} className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.deadline ?? "Due"}
          </span>
          <input type="date" {...register("dueDate")} className={field} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
          {dict.forms.message}
        </span>
        <textarea {...register("notes")} rows={4} className={cn(field, "resize-y")} />
      </label>
      <FileUpload label={dict.forms.upload ?? "Upload"} onChange={setFiles} />
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? dict.common.loading : dict.forms.submitPrint ?? dict.forms.submitQuote}
      </Button>
      {status === "success" && (
        <p className="border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-sm">
          {dict.forms.successPrint ?? dict.forms.successQuote}
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
