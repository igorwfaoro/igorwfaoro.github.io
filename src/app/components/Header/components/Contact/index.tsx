import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { SiGmail } from 'react-icons/si';

interface Item {
  href: string;
  label: string;
  color: string;
  Icon: IconType;
}

const items: Item[] = [
  {
    href: 'https://github.com/igorwfaoro',
    label: 'igorwfaoro',
    color: '#d9e3f1',
    Icon: FaGithub
  },
  {
    href: 'https://www.linkedin.com/in/igorwfaoro',
    label: 'igorwfaoro',
    color: '#70a8ff',
    Icon: FaLinkedinIn
  },
  {
    href: 'https://www.instagram.com/igorwfaoro',
    label: 'igorwfaoro',
    color: '#f273c2',
    Icon: FaInstagram
  },
  {
    href: 'mailto:igor.faoro17@gmail.com',
    label: 'igor.faoro17@gmail.com',
    color: '#f27b73',
    Icon: SiGmail
  },
  {
    href: 'https://wa.me/+5554996726664',
    label: '+55 54 99672-6664',
    color: '#78d990',
    Icon: FaWhatsapp
  }
];

export default function Contact() {
  return (
    <section>
      <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
        {items.map(({ href, label, color, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl border bg-[#091625]/70 px-4 py-3 text-sm font-medium shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#10243a] focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{ borderColor: `${color}66`, color }}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
