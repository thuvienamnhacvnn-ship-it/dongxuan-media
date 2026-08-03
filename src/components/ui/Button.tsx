import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "gold";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-red text-warm-white hover:bg-brand-red-dark shadow-[0_0_0_1px_rgba(200,16,30,0.3)] hover:shadow-[0_8px_30px_-8px_rgba(200,16,30,0.55)]",
  secondary:
    "bg-ink-black text-warm-white hover:bg-charcoal shadow-sm",
  ghost:
    "bg-transparent text-ink-black hover:bg-ink-black/5 border border-transparent",
  outline:
    "bg-transparent text-ink-black border border-ink-black/20 hover:border-brand-red hover:text-brand-red",
  gold:
    "bg-brand-gold text-ink-black hover:bg-brand-gold-light shadow-[0_8px_24px_-10px_rgba(217,161,46,0.6)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs tracking-wide",
  md: "h-11 px-5 text-sm tracking-wide",
  lg: "h-13 px-7 text-sm tracking-wider sm:text-base",
};

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentProps<"button">, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-semibold uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper-white disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ComponentProps<"button">)}
    >
      {children}
    </button>
  );
}
