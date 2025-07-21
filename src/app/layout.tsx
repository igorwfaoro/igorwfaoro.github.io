import dayjs from 'dayjs';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';

import { CONFIG } from '@/core/config';
import '@/styles/globals.scss';
import { lang } from '@/translation/lang';
import { GoogleAnalytics } from '@next/third-parties/google';
import Loading from './loading';

const meta = {
  title: 'Igor Wilian Faoro | Software Developer',
  description:
    'Senior Full-Stack Developer | Node.js, React.js, Next.js, TypeScript, Angular, C#, Java',
  image: '/images/profile.jpg'
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  metadataBase: new URL(CONFIG.siteUrl),
  robots: 'index',
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    type: 'website',
    siteName: `Igor Wilian Faoro`
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    card: 'summary',
    images: meta.image
  }
};

dayjs.locale(lang.key);

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={lang.key} className="bg-slate-900">
      <head></head>
      <body className="text-white h-screen">
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <GoogleAnalytics gaId={CONFIG.google.gtag} />
      </body>
    </html>
  );
}
