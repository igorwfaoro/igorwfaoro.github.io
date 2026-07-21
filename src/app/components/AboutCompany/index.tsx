'use client';

import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import { useTranslation } from '@/translation/contexts/TranslationContext';
import Image from 'next/image';

export default function AboutCompany() {
  const { t } = useTranslation();

  const description = t<string[]>('aboutCompany.descriptionParagraphs');

  return (
    <section>
      <Card className="relative overflow-hidden border-[#60749a]/45 bg-[linear-gradient(125deg,rgba(31,36,72,0.94),rgba(13,25,48,0.96))] p-7 shadow-2xl shadow-black/20 sm:p-9">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#627dfb]/10 blur-3xl" />
        <div className="relative max-w-xl space-y-6">
          <Image
            src="images/pristen-logo-white.svg"
            alt="Pristen Logo"
            className="h-7"
            width={173}
            height={28}
            unoptimized
          />

          <div className="space-y-3 border-t border-white/15 pt-5 leading-7 text-slate-100">
            {description.map((paragraph, i) => (
              <p key={`aboutCompany-description-${i}`}>{paragraph}</p>
            ))}
          </div>

          <Button
            href="https://pristen.com.br"
            target="_blank"
            theme="white-outline"
            className="w-fit border-[#7698ff]/75 px-5 py-3 text-[#9bb3ff] hover:border-[#9bb3ff] hover:bg-[#7698ff]/10"
          >
            {t('aboutCompany.buttonViewMore')}
          </Button>
        </div>
      </Card>
    </section>
  );
}
