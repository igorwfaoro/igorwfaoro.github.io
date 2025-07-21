'use client';

import Heading from '@/components/Heading/Heading';
import { useTranslation } from '@/translation/contexts/TranslationContext';

export default function AboutMe() {
  const { t } = useTranslation();

  const description = t<string[]>('aboutMe.descriptionParagraphs');

  return (
    <section className="space-y-4">
      <Heading.H2>{t('aboutMe.title')}</Heading.H2>

      <div className="space-y-2">
        {description.map((paragraph, i) => (
          <p key={`aboutMe-description-${i}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
