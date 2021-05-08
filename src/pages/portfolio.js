import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'gatsby';

import Arrow from '../../static/img/arrow-next.svg';
import { projectsList, projectExamples } from '../fixtures';

import styles from '.././styles/pages/portfolio.module.scss';
import ErrorBoundary from '../ErrorBoundary';
import Layout from '../components/layout';
import { DataContext } from '../fixtures/data';
import { url } from '../constants/url';
import PortfolioPlug from '../components/plugs/portfolioPlug';
import { usePrevPathName } from '../hooks/usePrevPathName';

const Portfolio = () => {
  const { portfolioData } = useContext(DataContext);
  const { curretUrl } = usePrevPathName();
  const allCategory = portfolioData.portfolioGroups.reduce((accum, elem) => {
    if (elem.projects.length) {
      accum.push(...elem.projects);
    }
    return accum;
  }, []);
  const [currentCategory, setCurrentCategory] = useState(allCategory);

  const categoryHandler = item => {
    if (item === 'Все') {
      const allCategory = portfolioData.portfolioGroups.reduce(
        (accum, elem) => {
          if (elem.projects.length) {
            accum.push(...elem.projects);
          }
          return accum;
        },
        []
      );
      setCurrentCategory(allCategory);
      return;
    }
    const filterCategory = portfolioData.portfolioGroups
      .filter(elem => elem.title.toUpperCase() === item.toUpperCase())
      .reduce((accum, item) => {
        accum.push(...item.projects);
        return accum;
      }, []);

    setCurrentCategory(filterCategory);
  };
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isPhone = useMediaQuery({ maxWidth: 767 });
  const list = projectsList.map((item, index) => {
    return (
      <li
        key={index}
        className={styles.projects__item}
        onClick={() => categoryHandler(item)}
      >
        {item}
      </li>
    );
  });
  const projects = !isPhone
    ? projectExamples.slice(0, 4)
    : projectExamples.slice(0, 3);
  const examples = currentCategory.map((item, index) => {
    return (
      <div
        key={index}
        className={`${styles[`projects__${index + 1}`]} ${
          styles.projects__example
        }`}
        style={{
          backgroundImage: `url(${`${url}/storage/${item.img}`})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
        }}
      >
        {isTablet ? (
          <>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <h4>{item.heading}</h4>
          </>
        ) : (
          <>
            <h4>{item.heading}</h4>
            <h2>{item.title}</h2>
            <p> {item.text}</p>
          </>
        )}
      </div>
    );
  });
  return (
    <Layout>
      <ErrorBoundary>
        <div className={styles.container}>
          <Helmet>
            <title>
              SoftLex | Разработка мобильных приложений и веб сервисов
            </title>
          </Helmet>
          <main className={styles.main}>
            <Link to={curretUrl} className={styles.goBack}>
              <img
                className={styles.arrowIcon}
                src="/img/arrow-left.svg"
                alt="arrow"
              />
              <span className={styles.goBack__text}>Назад</span>
            </Link>
            {/* заглушка */}
            <PortfolioPlug />

            {/* <div className={styles.projects}>
              <div className={styles.projects__info}>
                <div className={styles.projects__flex}>
                  <div className={styles.dot}></div>
                  <div className={styles.subtitle}>Портфолио</div>
                </div>
                <div className={styles.projects__main}>
                  <h2 className={styles.projects__title}>
                    Наши лучшие работы расскажут вам больше о нашем опыте
                  </h2>
                  <p
                    className={`${styles.projects__text} ${styles.projects__text_grey}`}
                  >
                    Более чем за 5 лет, мы разработали более трехсот проектов
                    для топовых клиентов. Вот лишь некоторые из них
                  </p>
                </div>
              </div>
              <ul className={styles.projects__list}>{list}</ul>
              <div className={styles.projects__container}>{examples}</div>
              <div className={styles.projects__pagination}>
                Страница
                <span className={styles.projects__activePage}>1</span>
                из
                <span className={styles.projects__numberOfPages}>10</span>
                <span className={styles.projects__buttons}>
                  <button>
                    <Arrow />
                  </button>
                  <button className={styles.projects__button_next}>
                    <Arrow />
                  </button>
                </span>
              </div>
            </div> */}
          </main>
        </div>
      </ErrorBoundary>
    </Layout>
  );
};

export default Portfolio;
