'use client'
import {useContext} from "react";
import style from './page.module.scss';
import teamPrinciples from '@/data/teamPrinciples.json';
import ListItemWithCheck from '@/components/ui/ListItemWithCheck/ListItemWithCheck';

import translations from '@/data/translations.json';
import { LangContext } from "@/context/LangContext";

export default function Home() {
  const { lang } = useContext(LangContext)

  // @ts-ignore
  const t: any = translations[lang].main;

  return (
    <>
      <div className={style.video}>
        <video
          src="./assets/video/main-bg.mp4"
          autoPlay={true}
          muted
          loop
        >

        </video>


        <div
          className={style.video__filter}
        >
          <p
            className={'typography_h6'}
          >
            {t.slogan}
          </p>
        </div>
      </div>


      <div className={style.wrap}>
        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>
            Welcome to Staffchange: Your Reliable Partner in Job Search and Employment!
          </h2>

          <p className={`typography_text`}>
            Welcome to Staffchange - your trusted partner in job search and employment! We are a company dedicated to harmonizing the needs of employers and candidates in the field of employment.
            Our mission is to help qualified professionals realize their skills, and to aid young talents in finding their ideal job and elevate their career potential. We offer innovative solutions and personalized support to ensure successful employment for each of our clients.
            Join our employment community today and start your journey to career growth and achievements!
          </p>
        </div>

        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>
            Your Bridge to Success: Staffchange
          </h2>

          <p className={`typography_text`}>
            The company Staffchange is a leader in the employment market, specializing in finding ideal job placements for candidates across various sectors. Our mission is to provide high-quality job search services, aligning the needs of candidates with the needs of employers.

            We work with a broad spectrum of companies and organizations to ensure diversity of vacancies in different industries, from information technology and marketing to finance and medicine. Our team of professionals is always ready to provide you with personal support and advice to help you find a job that aligns with your goals and ambitions.

            Join our employment community today and let us help you make your next career move!
          </p>
        </div>
      </div>
    </>

  );
}
