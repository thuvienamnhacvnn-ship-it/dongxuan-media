"use client";

import { useCallback, useState } from "react";
import { FileUp, X, Paperclip } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  label: string;
  hint?: string;
  onChange: (files: File[]) => void;
  maxFiles?: number;
}

export function FileUpload({
  label,
  hint,
  onChange,
  maxFiles = 5,
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  const validate = useCallback((list: FileList | File[]) => {
    const next: File[] = [];
    const arr = Array.from(list);
    for (const file of arr) {
      const ext = "." + (file.name.split(".").pop()?.toLowerCase() ?? "");
      const allowed = siteConfig.acceptedUploadExtensions as readonly string[];
      if (!allowed.includes(ext)) {
        setError(`Định dạng không hỗ trợ: ${file.name}`);
        continue;
      }
      if (file.size > siteConfig.maxUploadBytes) {
        setError(`File quá lớn (tối đa 10MB): ${file.name}`);
        continue;
      }
      next.push(file);
    }
    return next;
  }, []);

  const apply = useCallback(
    (incoming: File[]) => {
      setError(null);
      setFiles((prev) => {
        const merged = [...prev, ...incoming].slice(0, maxFiles);
        onChange(merged);
        return merged;
      });
    },
    [maxFiles, onChange]
  );

  function remove(index: number) {
    setFiles((prev) => {
      const next = prev.filter((_, i) => i !== index);
      onChange(next);
      return next;
    });
  }

  return (
    <div>
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-ink-black/70">
        {label}
      </span>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          apply(validate(e.dataTransfer.files));
        }}
        className={cn(
          "relative flex cursor-pointer flex-col items-center justify-center border border-dashed px-4 py-8 transition-colors",
          dragging
            ? "border-brand-red bg-brand-red/5"
            : "border-ink-black/20 bg-paper-white hover:border-brand-red/40"
        )}
      >
        <input
          type="file"
          multiple
          accept={siteConfig.acceptedUploadExtensions.join(",")}
          className="absolute inset-0 cursor-pointer opacity-0"
          onChange={(e) => {
            if (e.target.files) apply(validate(e.target.files));
            e.target.value = "";
          }}
          aria-label={label}
        />
        <FileUp className="mb-2 h-6 w-6 text-brand-red" />
        <p className="text-center text-sm text-ink-black/70">
          Kéo thả hoặc bấm để chọn file
        </p>
        <p className="mt-1 text-center text-[11px] text-ink-black/45">
          PDF, JPG, PNG, SVG, DOCX, ZIP · tối đa 10MB · tối đa {maxFiles} file
        </p>
      </div>
      {hint && <p className="mt-1.5 text-xs text-ink-black/45">{hint}</p>}
      {error && <p className="mt-2 text-xs text-brand-red">{error}</p>}
      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((f, i) => (
            <li
              key={`${f.name}-${i}`}
              className="flex items-center justify-between gap-2 border border-ink-black/10 bg-warm-white px-3 py-2 text-sm"
            >
              <span className="flex min-w-0 items-center gap-2">
                <Paperclip className="h-3.5 w-3.5 shrink-0 text-brand-gold" />
                <span className="truncate">{f.name}</span>
                <span className="shrink-0 text-xs text-ink-black/40">
                  {(f.size / 1024).toFixed(0)} KB
                </span>
              </span>
              <button
                type="button"
                onClick={() => remove(i)}
                className="rounded-sm p-1 text-ink-black/50 hover:bg-brand-red/10 hover:text-brand-red"
                aria-label={`Remove ${f.name}`}
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
