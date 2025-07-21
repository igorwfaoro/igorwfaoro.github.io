'use client';

import Heading from '@/components/Heading/Heading';
import { useTranslation } from '@/translation/contexts/TranslationContext';

export default function HowICanHelp() {
  const { t } = useTranslation();

  const items = t<string[]>('howICanHelp.items');

  return (
    <section className="space-y-4">
      <Heading.H2>{t('howICanHelp.title')}</Heading.H2>

      <ul className='space-y-3'>
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </section>
  );
}
