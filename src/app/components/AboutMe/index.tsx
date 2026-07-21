'use client';

import Heading from '@/components/Heading/Heading';
import { useTranslation } from '@/translation/contexts/TranslationContext';

export default function AboutMe() {
  const { t } = useTranslation();

  const description = t<string[]>('aboutMe.descriptionParagraphs');

  return (
    <section className="space-y-7">
      <div className="space-y-3">
        <Heading.H2 className="text-2xl font-semibold text-white">
          {t('aboutMe.title')}
        </Heading.H2>
        <div className="h-0.5 w-12 bg-[#6f9fff]" />
      </div>

      <div className="relative ml-1 space-y-6 border-l border-[#5378a8]/35 pl-8 text-base leading-7 text-slate-200">
        {description.map((paragraph, i) => (
          <p key={`aboutMe-description-${i}`} className="relative">
            <span className="absolute -left-[2.2rem] top-2.5 h-2.5 w-2.5 rounded-full bg-[#6f9fff] ring-4 ring-[#0b1b30]" />
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
