const { env } = process;

export const CONFIG = {
  basePath: env.BASE_PATH ?? '',
  siteUrl: env.SITE_URL ?? 'http://localhost:3000',
  google: {
    gtag: env.GTAG ?? ''
  }
};
