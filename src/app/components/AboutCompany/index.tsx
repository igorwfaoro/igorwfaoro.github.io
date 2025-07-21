'use client';

import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import { useTranslation } from '@/translation/contexts/TranslationContext';

export default function AboutCompany() {
  const { t } = useTranslation();

  const description = t<string[]>('aboutCompany.descriptionParagraphs');

  return (
    <section>
      <Card className="space-y-4 p-4 bg-[#110726]">
        <img
          src="images/pristen-logo-white.svg"
          alt="Pristen Logo"
          className="h-4"
        />

        <div className="space-y-2">
          {description.map((paragraph, i) => (
            <p key={`aboutCompany-description-${i}`}>{paragraph}</p>
          ))}
        </div>

        <Button
          href="https://pristen.com.br"
          target="_blank"
          theme="white-outline"
        >
          {t('aboutCompany.buttonViewMore')}
        </Button>
      </Card>
    </section>
  );
}
