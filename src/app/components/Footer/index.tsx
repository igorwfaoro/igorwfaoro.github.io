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
      <footer className="text-center space-y-2">
        <p className="text-sm italic">
          {projectExplanation[0]}
          <a
            href="https://github.com/igorwfaoro/igorwfaoro.github.io"
            target="_blank"
            className="underline text-blue-500"
          >
            {t('footer.projectExplanation.link')}
          </a>
          {projectExplanation[1]}
        </p>

        <div>Igor Wilian Faoro | {dayjs().format('YYYY')}</div>
      </footer>
    </>
  );
}
