import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** full = logo ngang đầy đủ; mark = crop DX icon; light = full (tương thích API cũ) */
  variant?: "full" | "mark" | "light";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "hero";
}

const markBox = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14 sm:h-16 sm:w-16",
  xl: "h-16 w-16 sm:h-20 sm:w-20",
  "2xl": "h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28",
  /** ~3× 2xl for banner hero */
  hero: "h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72",
};

const fullBox = {
  sm: "h-8 w-[7.5rem]",
  md: "h-9 w-[9.5rem] sm:h-10 sm:w-[11rem]",
  lg: "h-11 w-[12.5rem] sm:h-12 sm:w-[14rem]",
  xl: "h-12 w-[14rem] sm:h-14 sm:w-[16rem]",
  "2xl": "h-14 w-[15rem] sm:h-16 sm:w-[18rem] lg:h-[4.5rem] lg:w-[20rem]",
  /** Banner hero — large full wordmark */
  hero: "h-32 w-[min(92vw,28rem)] sm:h-40 sm:w-[min(90vw,34rem)] md:h-44 md:w-[38rem] lg:h-48 lg:w-[42rem] xl:h-52 xl:w-[46rem]",
};

const LOGO_SRC = "/logo/logo.png";

export function Logo({ className, variant = "full", size = "md" }: LogoProps) {
  const isMark = variant === "mark";

  return (
    <span
      className={cn(
        "relative inline-block shrink-0 overflow-hidden",
        isMark ? markBox[size] : fullBox[size],
        className
      )}
    >
      <Image
        src={LOGO_SRC}
        alt="Đồng Xuân Media"
        fill
        priority
        className={cn(
          isMark
            ? "object-cover object-left"
            : "object-contain object-left"
        )}
        sizes={
          isMark
            ? "(max-width: 640px) 288px, 320px"
            : "(max-width: 640px) 90vw, 768px"
        }
      />
    </span>
  );
}
