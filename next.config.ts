import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  experimental: {
    ppr: true,
    // Include `turbo` so next-intl adds aliases here instead of the
    // newer `turbopack` key, which isn't recognized in our Next.js version.
    turbo: {},
  }
};

export default withNextIntl(nextConfig);
