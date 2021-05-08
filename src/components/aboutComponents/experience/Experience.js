import React, { memo, useState } from 'react';
import { Link } from 'gatsby';
import CustomSlider from '../../slider';
import { useMediaQuery } from 'react-responsive';
import { url } from '../../../constants/url';
import ArrowSmRight from '../../../../static/img/arrow-sm-right.svg';

import styles from '../../../styles/pages/index.module.scss';
import { usePrevPathName } from '../../../hooks/usePrevPathName';

function Experience({ partnersData, reviewsData, sectionsRef, portfolioData }) {
  const { setCurrentPath } = usePrevPathName('/aboutPage');
  const [partnersSlide, setPartnersCurrentSlide] = useState(0);
  const { portfolioGroups } = portfolioData;
  const handleToggleAbout = () => {
    setCurrentPath('/aboutPage');
  };
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const projects = portfolioGroups[0].projects.map((data, index) => (
    <div className={styles.experience__card} key={index}>
      <img
        className={styles.experience__card_img}
        src={`${url}/storage/${data.img}`}
        alt="experience card"
      />
      <div className={styles.experience__card_info}>
        <div className={styles.experience__card_flex}>
          <h2 className={styles.experience__card_title}>{data.title}</h2>
          <Link to="/">
            <div className={styles.link}>
              <p className={styles.link__text}>Перейти</p>
              <ArrowSmRight />
            </div>
          </Link>
        </div>
        <div className={styles.experience__card_main}>
          <div>
            <p>в команде</p>
            <strong>{data.team + ' человек'} </strong>
          </div>
          <div>
            <p>срок выполнения</p>
            <strong>{data.hours + ' часов'} </strong>
          </div>
          <div>
            <p>на все процессы</p>
            <strong>{data.summary}</strong>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section
      className={styles.experience}
      ref={el => (sectionsRef.current[2] = el)}
    >
      <div className={styles.experience__wrapper}>
        <div className={styles.flex}>
          <div className={styles.dot}></div>
          <div className={styles.subtitle}>Опыт</div>
        </div>
        <h1 className={styles.experience__title}>
          Создаем продукты более 5 лет
        </h1>
        <p className={styles.experience__subtext}>
          Мы создаем проекты разной сложности, это помогло нам накопить
          достаточный опыт, для эффективного сотрудничества
        </p>
      </div>
      <div className={styles.experience__partners}>
        <div className={styles.experience__partners_arrows}></div>
        <CustomSlider
          containerName={styles.experience__partners_container}
          arrowsClassname={styles.experience__partners_arrows}
          setOuterCurrentSlider={setPartnersCurrentSlide}
        >
          {partnersData.map((data, index) => (
            <div
              className={`${styles.experience__partners_item} ${
                index === partnersSlide
                  ? styles.experience__partners_itemBlue
                  : ''
              }`}
              key={index}
            >
              <h2 className={styles.experience__partners_year}>{data.year}</h2>
              <ul className={styles.experience__partners_list}>
                <li className={styles.experience__partners_listItem}>
                  {data.hours}
                </li>
                <li className={styles.experience__partners_listItem}>
                  {data.partnersAmount}
                </li>
              </ul>
              {data.partners.map((partner, childIndex) => (
                <div
                  className={styles.experience__partners_partner}
                  key={partner.name + childIndex}
                >
                  <img
                    src={`${url}/storage/${partner.logo}`}
                    alt="softlex partner logo"
                    height="43"
                    width="43"
                  />
                  <p className={styles.experience__partners_name}>
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </CustomSlider>
      </div>

      <div className={styles.experience__reviews}>
        <h2 className={styles.experience__sectionTitle}>
          Отзывы наших партнеров
        </h2>
        <div className={styles.experience__reviewsContainer}>
          <CustomSlider
            arrowsClassname={styles.experience__reviews_arrows}
            className={styles.experience__review}
            dots={true}
          >
            {reviewsData.map((data, index) => (
              <div className={styles.experience__review} key={index}>
                <img
                  src={`${url}/storage/${data.img}`}
                  className={styles.experience__reviewInfo_img}
                  alt="reviewer"
                  height="84"
                  width="84"
                />
                <div className={styles.experience__reviewInfo}>
                  <h3 className={styles.experience__reviewInfo_name}>
                    {data.name}
                  </h3>
                  <p className={styles.experience__reviewInfo_job}>
                    {data.job}
                  </p>
                  <p className={styles.experience__reviewInfo_text}>
                    {data.text}
                  </p>
                </div>
              </div>
            ))}
          </CustomSlider>
        </div>
      </div>
      <div className={styles.experience__wrapper}>
        <div className={styles.experience__project}>
          <div className={styles.experience__flex}>
            <h1 className={styles.experience__project_title}>
              Наши лучшие работы расскажут вам больше о нашем опыте
            </h1>
            <Link to="/portfolio" onClick={handleToggleAbout}>
              <div className={styles.link}>
                <p className={styles.link__text}>Смотреть все работы</p>
                <ArrowSmRight />
              </div>
            </Link>
          </div>
          {!isMobile ? (
            <div className={styles.experience__project_container}>
              {portfolioData && projects}
            </div>
          ) : (
            <CustomSlider
              dots={true}
              containerName={styles.experience__project_container}
            >
              {portfolioData && projects}
            </CustomSlider>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(Experience);
