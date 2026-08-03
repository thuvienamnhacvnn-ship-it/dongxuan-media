"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/get-dictionary";

/**
 * Lightweight booking form — easy to wire to Google Calendar / Calendly later.
 * POST /api/quote with type=booking for demo storage.
 */
function buildSchema(dict: Dictionary) {
  return z.object({
    name: z.string().min(2, dict.common.required),
    email: z.string().email(),
    phone: z.string().min(6, dict.common.required),
    date: z.string().min(1, dict.common.required),
    time: z.string().min(1, dict.common.required),
    mode: z.enum(["online", "phone", "onsite"]),
    message: z.string().optional(),
  });
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

const times = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

export function BookingForm({ dict }: { dict: Dictionary }) {
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
    defaultValues: { mode: "online", time: "10:00" },
  });

  const field =
    "w-full border border-ink-black/15 bg-paper-white px-3.5 py-2.5 text-sm outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30";

  async function onSubmit(data: FormValues) {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (v) formData.append(k, String(v));
      });
      formData.append("type", "booking");
      const res = await fetch("/api/quote", { method: "POST", body: formData });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      reset({ mode: "online", time: "10:00" });
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
            {dict.forms.date}
          </span>
          <input type="date" {...register("date")} className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
            {dict.forms.time}
          </span>
          <select {...register("time")} className={field}>
            {times.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>
      <fieldset>
        <legend className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
          {dict.forms.mode}
        </legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {(
            [
              ["online", dict.forms.modeOnline],
              ["phone", dict.forms.modePhone],
              ["onsite", dict.forms.modeOnsite],
            ] as const
          ).map(([value, label]) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-2 border border-ink-black/15 bg-paper-white px-3 py-3 text-sm has-[:checked]:border-brand-red has-[:checked]:bg-brand-red/5"
            >
              <input
                type="radio"
                value={value}
                {...register("mode")}
                className="accent-brand-red"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block">
        <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
          {dict.forms.message}
        </span>
        <textarea {...register("message")} rows={4} className={`${field} resize-y`} />
      </label>
      <p className="text-xs text-ink-black/45">
        {/* Architecture note for future integrations */}
        Calendly / Google Calendar: connect webhook in{" "}
        <code className="text-[11px]">/api/quote</code> or replace this form
        with embed.
      </p>
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? dict.common.loading : dict.forms.submitBooking}
      </Button>
      {status === "success" && (
        <p className="border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-sm">
          {dict.forms.successBooking}
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
