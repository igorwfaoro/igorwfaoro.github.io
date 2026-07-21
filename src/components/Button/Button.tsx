import Link from 'next/link';
import {
  CSSProperties,
  ComponentProps,
  HTMLAttributeAnchorTarget
} from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

export type ButtonTheme =
  | 'primary'
  | 'primary-outline'
  | 'white-outline'
  | 'secondary'
  | 'light'
  | 'highlight'
  | 'danger'
  | 'warning';

export type ButtonSize = 'normal' | 'small';

const themeClasses: Record<ButtonTheme, string> = {
  primary: 'bg-primary text-white',
  'primary-outline': 'border border-primary bg-transparent text-primary',
  'white-outline': 'border border-white bg-transparent text-white',
  secondary: 'bg-secondary text-white',
  light: 'bg-neutral-100 text-neutral-950',
  highlight: 'bg-highlight text-white',
  danger: 'bg-red-600 text-white',
  warning: 'bg-yellow-500 text-white'
};

const sizeClasses: Record<ButtonSize, string> = {
  small: 'px-2 py-1',
  normal: 'px-4 py-3'
};

type ButtonProps = ComponentProps<'button'> & {
  icon?: IconType;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  color?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
};

export default function Button({
  children,
  icon: Icon,
  href,
  target,
  theme,
  size,
  className,
  color,
  style,
  ...otherProps
}: ButtonProps) {
  const content = (
    <>
      {Icon && <Icon />} {children}
    </>
  );

  const buttonClasses = twMerge(
    'block h-auto rounded-lg text-center font-bold uppercase shadow-sm transition-all ease-in-out hover:brightness-90 disabled:cursor-not-allowed disabled:border-none disabled:bg-gray-400 disabled:text-gray-300 [text-wrap:nowrap]',
    themeClasses[theme ?? 'primary'],
    sizeClasses[size ?? 'normal'],
    className
  );

  const buttonStyle: CSSProperties = { ...style, backgroundColor: color };

  return href ? (
    <Link
      className={buttonClasses}
      style={buttonStyle}
      href={href}
      target={target}
    >
      {content}
    </Link>
  ) : (
    <button className={buttonClasses} style={buttonStyle} {...otherProps}>
      {content}
    </button>
  );
}
