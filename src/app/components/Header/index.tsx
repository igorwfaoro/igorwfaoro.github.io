'use client';

import Contact from '@/app/components/Header/components/Contact';
import Heading from '@/components/Heading/Heading';
import { useTranslation } from '@/translation/contexts/TranslationContext';
import Image from 'next/image';

export default function Header() {
  const { t } = useTranslation();

  const items = t<string[]>('header.items');

  return (
    <header className="space-y-6">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <Image
          src="images/profile.jpg"
          alt="Profile Picture"
          className="h-40 w-40 rounded-full border border-white/20 object-cover shadow-2xl shadow-black/35 sm:h-44 sm:w-44"
          width={176}
          height={176}
          unoptimized
        />

        <div className="space-y-4 text-center sm:pt-1 sm:text-left">
          <Heading.H1 className="text-3xl font-semibold leading-none text-white">
            {t('header.title')}
          </Heading.H1>

          <ul className="space-y-2 text-sm text-slate-200">
            {items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      </div>

      <Contact />
    </header>
  );
}
