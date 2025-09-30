import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const isProduction = process.env.NODE_ENV === 'production'

export const basePath = isProduction ? '/jardinnaturepibrac' : '';
export const host = isProduction ? 'https://anvitech.github.io' : 'http://localhost:3000';

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  assetPrefix: isProduction ? basePath : '',
  basePath: isProduction ? basePath : '',
};

export default withNextIntl(nextConfig);
