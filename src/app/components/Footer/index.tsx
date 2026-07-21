'use client';

import { useTranslation } from '@/translation/contexts/TranslationContext';
import dayjs from 'dayjs';

export default function Footer() {
  const { t } = useTranslation();

  const projectExplanation = t('footer.projectExplanation.description').split(
    '{{repoLink}}'
  );

  return (
    <>
      <footer className="space-y-5 border-t border-[#52709a]/25 pt-9 text-center">
        <p className="text-sm leading-6 text-slate-400">
          {projectExplanation[0]}
          <a
            href="https://github.com/igorwfaoro/igorwfaoro.github.io"
            target="_blank"
            className="text-[#8dacff] underline decoration-[#8dacff]/40 underline-offset-4 transition hover:text-white"
          >
            {t('footer.projectExplanation.link')}
          </a>
          {projectExplanation[1]}
        </p>

        <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          Igor Wilian Faoro | {dayjs().format('YYYY')}
        </div>
      </footer>
    </>
  );
}
