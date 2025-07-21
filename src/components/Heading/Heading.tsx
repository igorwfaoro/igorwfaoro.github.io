import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeadingProps {
  children: string | ReactNode | ReactNode[];
  className?: string;
}

export default function Heading({}: HeadingProps) {
  return <></>;
}

Heading.H1 = function H1({ children, className }: HeadingProps) {
  return <h1 className={twMerge('text-3xl font-bold', className)}>{children}</h1>;
};

Heading.H2 = function H2({ children, className }: HeadingProps) {
  return <h2 className={twMerge('text-xl font-bold', className)}>{children}</h2>;
};

Heading.H3 = function H3({ children, className }: HeadingProps) {
  return <h3 className={twMerge('text-lg font-bold', className)}>{children}</h3>;
};

Heading.H4 = function H4({ children, className }: HeadingProps) {
  return <h4 className={twMerge('text-md font-bold', className)}>{children}</h4>;
};

Heading.H5 = function H5({ children, className }: HeadingProps) {
  return <h5 className={twMerge('text-md font-bold', className)}>{children}</h5>;
};

Heading.H6 = function H6({ children, className }: HeadingProps) {
  return <h6 className={twMerge('text-md font-bold', className)}>{children}</h6>;
};
