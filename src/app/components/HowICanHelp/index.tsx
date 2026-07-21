'use client';

import Heading from '@/components/Heading/Heading';
import { useTranslation } from '@/translation/contexts/TranslationContext';

export default function HowICanHelp() {
  const { t } = useTranslation();

  const items = t<string[]>('howICanHelp.items');

  return (
    <section className="space-y-7">
      <div className="space-y-3">
        <Heading.H2 className="text-2xl font-semibold text-white">
          {t('howICanHelp.title')}
        </Heading.H2>
        <div className="h-0.5 w-12 bg-[#6f9fff]" />
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <li
            key={it}
            className="rounded-xl border border-[#52709a]/30 bg-[#0b1a2b]/45 px-5 py-4 leading-6 text-slate-200 transition hover:border-[#7597ca]/60 hover:bg-[#10243a]/65"
          >
            {it}
          </li>
        ))}
      </ul>
    </section>
  );
}
