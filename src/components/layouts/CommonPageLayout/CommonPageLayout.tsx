import { ReactNode } from 'react';
import style from './CommonPageLayout.module.scss';

interface Props {
  children: ReactNode;
  title: string;
  subtitle?: string;
}
export default function CommonPageLayout({ children, title, subtitle }: Props) {
  return (
    <div
      className={`
        ${style.commonLayout}
      `}
    >
      <div
        className={`
          ${style.commonLayout__top}
          mainContainer_padding  
        `}
      >
        <div
          className={`
            ${style.commonLayout__filter}
          `}
        >
          <h1
            className={`
            typography_h1 
          `}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={`
            typography_text
          `}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div
        className={`
          ${style.commonLayout__bottom}
        `}
      >
        {children}
      </div>
    </div>
  );
}
