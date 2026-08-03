"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface MediaImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  overlay?: "none" | "dark" | "red" | "gold" | "gradient";
  frame?: boolean;
}

const overlays = {
  none: "",
  dark: "bg-gradient-to-t from-ink-black/85 via-ink-black/25 to-transparent",
  red: "bg-gradient-to-br from-brand-red/40 via-transparent to-ink-black/50",
  gold: "bg-gradient-to-tr from-brand-gold/30 via-transparent to-ink-black/40",
  gradient:
    "bg-gradient-to-r from-ink-black/70 via-ink-black/20 to-brand-red/30",
};

export function MediaImage({
  src,
  alt,
  className,
  imgClassName,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = true,
  width,
  height,
  overlay = "none",
  frame = true,
}: MediaImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-charcoal",
        frame && "img-frame",
        className
      )}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width ?? 1200}
          height={height ?? 800}
          priority={priority}
          sizes={sizes}
          className={cn("h-auto w-full object-cover", imgClassName)}
        />
      )}
      {overlay !== "none" && (
        <div
          className={cn("pointer-events-none absolute inset-0", overlays[overlay])}
          aria-hidden
        />
      )}
    </div>
  );
}
