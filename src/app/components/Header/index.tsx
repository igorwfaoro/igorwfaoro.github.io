'use client';

import Contact from '@/app/components/Header/components/Contact';
import Heading from '@/components/Heading/Heading';
import { useTranslation } from '@/translation/contexts/TranslationContext';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { t } = useTranslation();

  const items = t<string[]>('header.items');

  return (
    <header className='space-y-4'>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
        <img
          src="images/profile.jpg"
          alt="Profile Picture"
          className="rounded-full h-44 w-44"
        />

        <div className="space-y-4 text-center sm:text-left">
          <Heading.H1>{t('header.title')}</Heading.H1>

          <ul className="space-y-1">
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
