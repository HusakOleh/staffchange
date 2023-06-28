import style from './page.module.scss';
import { useTranslations } from 'next-intl';
import teamPrinciples from "@/data/teamPrinciples.json";
import ListItemWithCheck from "@/components/ui/ListItemWithCheck/ListItemWithCheck";

export default function Home() {
  const t = useTranslations('Index');

  return (
    <div
      className={style.wrap}
    >
      <div>DIV</div>
      <div>DIV</div>


      <div className={style.bottom}>
        <h2
          className={`typography_h3 ${style.title}`}
        >
          Complete workforce solutions
        </h2>

        <p
          className={`typography_text`}
        >
          Hansavest offers complete workforce solutions primarily for industrial and manufacturing companies. Our services stand out from competitors due to our
          comprehensive approach – we will find a suitable worker, assess their qualifications and provide, according to the specific needs of our clients, the necessary training in
          our Hansavest Training Centre. After successfully completing these steps, we outsource the employee to the company.
          Through this process, we can ensure that our skilled assembly line workers meet the exact needs of our clients. 15 years of experience as a workforce rental agency has
          taught us how to match the right employee with the right job.
        </p>
      </div>



    </div>
  );
}
