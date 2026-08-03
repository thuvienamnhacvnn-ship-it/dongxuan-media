import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-warm-white px-4 text-center">
      <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-brand-red">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold uppercase text-ink-black">
        Page not found
      </h1>
      <Link
        href="/vi"
        className="mt-8 inline-flex border border-ink-black bg-ink-black px-6 py-3 text-xs font-bold uppercase tracking-wider text-warm-white hover:bg-brand-red"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
