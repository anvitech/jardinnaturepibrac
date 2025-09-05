import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "dist",
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
