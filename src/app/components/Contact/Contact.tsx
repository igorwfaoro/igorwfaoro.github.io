import { removeHash } from '../../../util/helpers/color.helper';

interface ContactProps {}

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
    mainColor: removeHash('#1C2128')
  },
  {
    href: 'https://www.linkedin.com/in/igorwfaoro',
    label: 'igorwfaoro',
    logo: 'linkedin',
    mainColor: removeHash('#0B63BD')
  },
  {
    href: 'https://www.instagram.com/igorwfaoro',
    label: 'igorwfaoro',
    logo: 'instagram',
    mainColor: removeHash('#CB2770')
  },
  {
    href: 'mailto:igor.faoro17@gmail.com',
    label: 'igor.faoro17@gmail.com',
    logo: 'gmail',
    mainColor: removeHash('#E02E23')
  },
  {
    href: 'https://wa.me/+5554996726664',
    label: '+55_54_99672--6664',
    logo: 'whatsapp',
    mainColor: removeHash('#24CC63')
  }
];

export default function Contact({}: ContactProps) {
  const buildImgLink = ({ label, mainColor, logo }: Item) =>
    `https://img.shields.io/badge/${label}-${mainColor}?logo=${logo}&style=flat&logoColor=ffffff`;

  return (
    <section className='flex gap-3 flex-wrap'>
      {items.map((it) => (
        <a key={it.href} href={it.href} target="_blank">
          <img src={buildImgLink(it)} />
        </a>
      ))}
    </section>
  );
}
