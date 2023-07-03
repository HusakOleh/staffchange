'use client'
import { useContext } from "react";
import style from './LanguageSelector.module.scss';
import Link from 'next/link';
import { LangContext } from "@/context/LangContext";

export default function LanguageSelector() {
  const { lang, setLang } = useContext(LangContext)

  return (
    <select
      value={lang}
      onChange={(event) => {
        // @ts-ignore
        setLang(event.target.value);
      }}
    >
      <option value="en">English</option>
      <option value="pl">Polish</option>
      <option value="et">Estonian</option>
      <option value="ru">Russian</option>
    </select>
  );
}
