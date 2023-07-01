import style from '@/app/FAQ/page.module.scss';
import CommonPageLayout from '@/components/layouts/CommonPageLayout/CommonPageLayout';

export default function Faq() {
  return (
    <CommonPageLayout
      title={'Staffchange: Partnership for Progress'}
      subtitle={
        'Providing client-oriented workforce solutions aimed at bolstering your business'
      }
    >
      <div className={style.wrap}>
        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>
            From which country do the workers arrive as the result of workforce recruitment?
          </h2>

          <p className={`typography_text`}>
            Staffchange intermediates workforce in the area of metal work, assembly
            line and skilled workers and warehouse and logistics workforce mainly
            from Latvia and the Ukraine, and in case of readiness also from Estonia.
          </p>
        </div>

        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>
            When does the worker start working?
          </h2>

          <p className={`typography_text`}>
            Thanks to its long-term work experience Staffchange has much data
            about different employees. The most widely-spread procedure lasts
            from a couple of weeks until one month since your enterprise submits
            an application until the moment the worker starts working.
          </p>
        </div>


        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>
            Which kind of skills do the workers from abroad have?
          </h2>

          <p className={`typography_text`}>
            Staffchange guarantees that the education and work experience of the
            rented workforce in the corresponding area and the required position
            comply with the need. Staffchange employees test all candidates by
            carrying out various tests, interviews and practical work in order
            to become convinced that the level of skills and readiness to work
            abroad among the intermediated workforce is adequate. The decision
            concerning the choice of employees is made by the employee of
            Staffchange based on the certain needs of your enterprise and the
            employees’ skills.
          </p>
        </div>


        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>
            Which risks might my enterprise have when the worker does not meet the expectations?
          </h2>

          <p className={`typography_text`}>
            The employees of Staffchange first establish the certain requirements
            of your enterprise and the preconditions to the workers, and carry
            out a thorough selection process of the workforce. But if it still
            happens that the worker is not competent in the corresponding work
            area or does not suit your enterprise, the employee of Staffchange
            will quickly exchange the worker. Cases with non-competent employees
            have happened very rarely during the 15-year history of Staffchange.
          </p>
        </div>


        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>
            Main concerns when hiring people from other nationalities
          </h2>

          <p className={`typography_text`}>
            The employee is not able to manage with his work
            All workers intermediated by Staffchange have to pass professional
            tests and trials, and pass a personal job interview, which enables
            to establish the employee’s competence and suitability. If it happens
            that an employee cannot cope with his work, it imposes no risks on
            your enterprise, because the employee is exchanged at the first
            possibility. Cases with incompetent workers have occurred very seldom
            during the long experience of Staffchange.
          </p>
        </div>


      </div>
    </CommonPageLayout>
  );
}
