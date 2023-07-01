import { ReactNode, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import style from './Button.module.scss';

type ButtonVariant = 'primary' | 'warning';
type ButtonType = Extract<
  ButtonHTMLAttributes<HTMLButtonElement>['type'],
  string
>;
interface Props {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  className = '',
  variant = 'primary',
  type = 'button',
  onClick = () => {},
}: Props) {
  const buttonVariant = `button_${variant}`;

  return (
    <button
      className={`
        ${className}
        ${style.button}
        ${style[buttonVariant]}
        typography_text
      `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
