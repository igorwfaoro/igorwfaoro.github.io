import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type DividerProps = InputHTMLAttributes<HTMLDivElement>;

export default function Divider({ className, ...otherProps }: DividerProps) {
  return (
    <div
      className={twMerge('h-px w-full bg-[#52709a]/25', className)}
      {...otherProps}
    />
  );
}
