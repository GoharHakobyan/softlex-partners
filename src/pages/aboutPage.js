import React, { useContext, useRef, useEffect, memo } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import ArrowLeft from '../../static/img/arrow-left.svg';
import AboutUsImg from '../../static/img/about-us.svg';
import styles from '../styles/pages/index.module.scss';

import { url } from '../constants/url';
import { DataContext } from '../fixtures/data';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import { animateScroll as scroll } from 'react-scroll';
import DescriptionCard from '../components/aboutComponents/descriptionCard';
import OpacityCard from '../components/aboutComponents/opacityCard';
import ServiceCard from '../components/aboutComponents/serviceCard';
import Experience from '../components/aboutComponents/experience';
import Technologies from '../components/aboutComponents/technologies';
import Form from '../components/aboutComponents/form';
import { usePrevPathNameForAbout } from '../hooks/usePrevPathName';

export const AboutPage = ({ location }) => {
  const context = useContext(DataContext);
  const { curretUrlAbout } = usePrevPathNameForAbout();
  const sectionsRef = useRef([]);
  const { portfolioData, mainData } = context;

  const {
    aboutUsData,
    cooperationData,
    opacityData,
    servicesData,
    partnersData,
    cardsDesktopData,
    reviewsData,
    technologiesData,
    formData,
  } = mainData;

  useEffect(() => {
    sectionsRef.current = sectionsRef.current.slice(0, cardsDesktopData.length); // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <ErrorBoundary>
        <Helmet>
          <title>
            SoftLex | Разработка мобильных приложений и веб сервисов
          </title>
        </Helmet>
        <main className={styles.main}>
          <Link to={curretUrlAbout} className={styles.goBack}>
            <ArrowLeft />
            <span className={styles.goBack__text}>Назад</span>
          </Link>
          <div className={styles.details}>
            <div className={styles.details__info}>
              <div className={styles.details__flex}>
                <div className={styles.dot}></div>
                <div className={styles.subtitle}>О нас</div>
              </div>
              <div className={styles.details__main}>
                <h1 className={styles.details__title}>О главном в деталях</h1>
                <p className={styles.details__text}>
                  Действуем в ваших интересах прорабатывая каждый этап
                  взаимодействия. Вы можете доверить нам свои задачи и не
                  беспокоиться за результаты
                </p>
              </div>
            </div>
            <AboutUsImg className={styles.details__img} />
          </div>
          <div className={styles.about}>
            {aboutUsData.map((data, index) => (
              <DescriptionCard
                key={index}
                data={data}
                styles={styles}
                url={url}
              />
            ))}
          </div>
          <div className={styles.cooperation}>
            <h1 className={styles.cooperation__title}>
              Форматы сотрудничества
            </h1>
            <p className={styles.cooperation__subtitle}>
              За годы работы мы выработали несколько форматов взаимодействия с
              партнерами, которые позволяют решать актуальные бизнес-задачи и
              комфортно реализовывать совместные проекты.
            </p>
            <div className={styles.cooperation__cards}>
              {cooperationData.map((data, index) => (
                <DescriptionCard
                  key={index}
                  data={data}
                  styles={styles}
                  url={url}
                  cooperation={true}
                />
              ))}
            </div>
          </div>
          <div className={styles.opacity}>
            <h1 className={styles.opacity__title}>Прозрачность</h1>
            <p className={styles.opacity__text}>
              Для выстраивания долгосрочных отношений с партнерами необходимо
              наладить комфортный процесс реализации проектов и не последнюю
              роль в этом играет прозрачность процесса. Для обеспечения
              прозрачности мы используем ряд собственных инструментов, но по
              договоренности с партнером можем играть и на “его поле”.
            </p>
            <div className={styles.opacity__cards}>
              {opacityData.map((data, index) => (
                <OpacityCard
                  key={index}
                  data={data}
                  styles={styles}
                  url={url}
                />
              ))}
            </div>
          </div>

          <section
            className={styles.services}
            ref={el => (sectionsRef.current[1] = el)}
          >
            <div className={styles.flex}>
              <div className={styles.dot}></div>
              <div className={styles.subtitle}>Услуги</div>
            </div>
            <h1 className={styles.services__title}>
              Всё что нужно для создания качественного digital продукта
            </h1>
            <p className={styles.services__text}>
              Мы собрали команду профессионалов, что бы вы могли получить весь
              спектр услуг в одном месте. Это значительно экономит время и силы.
            </p>
            <div className={styles.services__cards}>
              {servicesData.map((data, index) => (
                <ServiceCard
                  key={index}
                  data={data}
                  styles={styles}
                  url={url}
                />
              ))}
            </div>
          </section>
        </main>
        <Experience
          partnersData={partnersData}
          reviewsData={reviewsData}
          sectionsRef={sectionsRef}
          portfolioData={portfolioData}
        />
        <main className={styles.main}>
          <Technologies
            sectionsRef={sectionsRef}
            url={url}
            technologiesData={technologiesData}
          />
          <Form sectionsRef={sectionsRef} formData={formData} url={url} />
        </main>
      </ErrorBoundary>
    </Layout>
  );
};

export default memo(AboutPage);
