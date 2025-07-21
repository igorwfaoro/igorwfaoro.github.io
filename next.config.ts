import { CONFIG } from '@/core/config';
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  basePath: CONFIG.basePath,
  webpack(config) {
    config.module.rules.forEach((rule: { oneOf: any[] }) => {
      rule.oneOf?.forEach((one) => {
        if (!`${one.issuer?.and}`.includes('_app')) return;
        one.issuer.and = [path.resolve(__dirname)];
      });
    });
    return config;
  }
};

export default nextConfig;
