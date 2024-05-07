import { twMerge } from 'tailwind-merge';

interface HeadingProps {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}

export default function Heading({}: HeadingProps) {
  return <></>;
}

Heading.H1 = ({ children, className }: HeadingProps) => (
  <h1 className={twMerge('text-3xl font-bold', className)}>{children}</h1>
);

Heading.H2 = ({ children, className }: HeadingProps) => (
  <h2 className={twMerge('text-xl font-bold', className)}>{children}</h2>
);

Heading.H3 = ({ children, className }: HeadingProps) => (
  <h3 className={twMerge('text-lg font-bold', className)}>{children}</h3>
);

Heading.H4 = ({ children, className }: HeadingProps) => (
  <h4 className={twMerge('text-md font-bold', className)}>{children}</h4>
);

Heading.H5 = ({ children, className }: HeadingProps) => (
  <h5 className={twMerge('text-md font-bold', className)}>{children}</h5>
);

Heading.H6 = ({ children, className }: HeadingProps) => (
  <h6 className={twMerge('text-md font-bold', className)}>{children}</h6>
);
