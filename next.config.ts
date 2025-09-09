import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  basePath: '/jardinnaturepibrac',
};

export default withNextIntl(nextConfig);
