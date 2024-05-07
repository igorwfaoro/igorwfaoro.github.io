import dayjs from 'dayjs';

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className="text-center">
      Igor Wilian Faoro | {dayjs().format('YYYY')}
    </footer>
  );
}
