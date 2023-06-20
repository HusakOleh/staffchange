import { useState } from 'react';
import style from './LanguageSelector.module.scss';

import GB from '@/icons/langIcon/GB.svg';
import PL from '@/icons/langIcon/GB.svg';
import RU from '@/icons/langIcon/GB.svg';

export default function LanguageSelector() {
  const [language, setLanguage] = useState('GB');

  const handleLanguageChange = (event: any) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <select
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="GB">English</option>
        <option value="PL">Poland</option>
        <option value="RU">Russian</option>
      </select>
    </div>
  );
}
