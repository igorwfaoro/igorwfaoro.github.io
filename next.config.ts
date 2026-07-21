import { CONFIG } from '@/core/config';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: CONFIG.basePath
};

export default nextConfig;
