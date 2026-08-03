import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Native SWC is blocked by Application Control on some Windows hosts;
  // WASM typecheck worker can crash. Run `npx tsc --noEmit` in CI instead.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow query string cache bust on /logo/logo.png?v=
    localPatterns: [
      {
        pathname: "/logo/**",
      },
      {
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
