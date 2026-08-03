/** Decorative Chinese-inspired red motifs for brand accents */
import { cn } from "@/lib/utils";

export function CloudMotif({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 48"
      className={cn("text-lacquer", className)}
      fill={color === "currentColor" ? "currentColor" : color}
      aria-hidden
    >
      {/* Stylized 祥云 / auspicious cloud */}
      <path d="M18 32c0-7 5-12 12-12 1.2 0 2.4.2 3.5.5C35 14 41 10 48 10c8 0 14.5 5 16.5 12.2A14 14 0 0 1 78 20c8 0 14 6 14 14 0 1.2-.2 2.3-.5 3.4H18.8A13.7 13.7 0 0 1 18 32z" opacity="0.9" />
      <path
        d="M28 28c2-5 7-8 13-8 1 0 2 .1 3 .4 2-4 6-7 11-7 5.5 0 10 3.2 12 7.8A10 10 0 0 1 82 28c0 .7-.1 1.3-.2 1.9H28.4c-.3-.6-.4-1.2-.4-1.9z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.45"
      />
    </svg>
  );
}

export function CornerLattice({
  className,
  flip,
}: {
  className?: string;
  flip?: "x" | "y" | "xy";
}) {
  const scale =
    flip === "x"
      ? "scale-x-[-1]"
      : flip === "y"
        ? "scale-y-[-1]"
        : flip === "xy"
          ? "scale-[-1]"
          : "";

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("text-brand-red", scale, className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      {/* 回纹 / key-fret corner */}
      <path d="M4 4h40v8H12v32H4V4z" />
      <path d="M16 16h24v8H24v16h-8V16z" opacity="0.7" />
      <path d="M28 28h12v12H28z" opacity="0.45" />
      <circle cx="52" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="52" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SealMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("text-brand-red", className)}
      fill="none"
      aria-hidden
    >
      {/* Square seal / stamp frame */}
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="9"
        y="9"
        width="30"
        height="30"
        rx="1"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      {/* Stylized DX monogram suggestion */}
      <path
        d="M16 16h10c5 0 8 3 8 8s-3 8-8 8H16V16z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M30 16l8 16M38 16l-8 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
        opacity="0.85"
      />
    </svg>
  );
}

export function WaveBorder({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 24"
      preserveAspectRatio="none"
      className={cn("h-6 w-full text-brand-red", className)}
      aria-hidden
    >
      <path
        fill="currentColor"
        fillOpacity="0.85"
        d="M0 16c60-12 120-12 180 0s120 12 180 0 120-12 180 0 120 12 180 0 120-12 180 0 120 12 180 0 120-12 180 0 120 12 180 0v8H0v-8z"
      />
      <path
        fill="currentColor"
        fillOpacity="0.35"
        d="M0 12c48-8 96-8 144 0s96 8 144 0 96-8 144 0 96 8 144 0 96-8 144 0 96 8 144 0 96-8 144 0 96 8 144 0 96-8 144 0 96 8 144 0v4H0v-4z"
      />
    </svg>
  );
}

export function KnotDot({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("text-brand-red", className)}
      fill="currentColor"
      aria-hidden
    >
      {/* Simple endless-knot inspired diamond */}
      <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" opacity="0.9" />
      <path
        d="M12 7l1.5 3.5L17 12l-3.5 1.5L12 17l-1.5-3.5L7 12l3.5-1.5L12 7z"
        fill="#111216"
        opacity="0.35"
      />
    </svg>
  );
}
