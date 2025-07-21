'use client';

import Heading from '@/components/Heading/Heading';
import { useTranslation } from '@/translation/contexts/TranslationContext';

interface Item {
  href: string;
  label: string;
  mainColor: string;
  logo: string;
}

const items: Item[] = [
  {
    href: 'https://github.com/igorwfaoro',
    label: 'igorwfaoro',
    logo: 'github',
    mainColor: '#1C2128'.replace('#', '')
  },
  {
    href: 'https://www.linkedin.com/in/igorwfaoro',
    label: 'igorwfaoro',
    logo: 'linkedin',
    mainColor: '#0B63BD'.replace('#', '')
  },
  {
    href: 'https://www.instagram.com/igorwfaoro',
    label: 'igorwfaoro',
    logo: 'instagram',
    mainColor: '#CB2770'.replace('#', '')
  },
  {
    href: 'mailto:igor.faoro17@gmail.com',
    label: 'igor.faoro17@gmail.com',
    logo: 'gmail',
    mainColor: '#E02E23'.replace('#', '')
  },
  {
    href: 'https://wa.me/+5554996726664',
    label: '+55_54_99672--6664',
    logo: 'whatsapp',
    mainColor: '#24CC63'.replace('#', '')
  }
];

export default function Contact() {
  const { t } = useTranslation();

  const buildImgLink = ({ label, mainColor, logo }: Item) =>
    `https://img.shields.io/badge/${label}-${mainColor}?logo=${logo}&style=flat&logoColor=ffffff`;

  return (
    <section className="space-y-4">
      {/* <Heading.H3>{t('header.contact.title')}</Heading.H3> */}

      <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
        {items.map((it) => (
          <a key={it.href} href={it.href} target="_blank">
            <img src={buildImgLink(it)} />
          </a>
        ))}
      </div>
    </section>
  );
}
