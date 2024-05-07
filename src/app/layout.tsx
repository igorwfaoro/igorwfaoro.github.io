import dayjs from 'dayjs';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';

import '../styles/globals.scss';
import { COLORS } from '../util/colors';
import { locale } from '../util/locale';
import Loading from './loading';

const meta = {
  title: 'Igor Wilian Faoro | Software Developer',
  description:
    "I am a full-stack developer with experience in various technologies, including Node.js, Angular, React, .Net, and Java. With strong skills in both backend and frontend development, I have the ability to create robust and scalable solutions to meet clients' needs. I have a problem-solving mindset and am always seeking to learn new technologies and improve my skills.",
  image: '/images/profile.jpg'
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  metadataBase: new URL(process.env.SITE_URL),
  robots: 'index',
  themeColor: COLORS.primary,
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

dayjs.locale(locale.id);

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={locale.id}>
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
