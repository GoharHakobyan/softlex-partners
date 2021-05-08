import React, { memo } from 'react';
import styles from '../../../styles/pages/index.module.scss';

const technologies = ({ url, technologiesData, sectionsRef }) => {
  return (
    <section
      className={styles.technologies}
      ref={el => (sectionsRef.current[4] = el)}
      id="technologies"
    >
      <div className={styles.flex}>
        <div className={styles.dot}></div>
        <div className={styles.subtitle}>Технологии</div>
      </div>
      <h1 className={styles.technologies__title}>
        Наш технологический стэк поможет решить любую задачу
      </h1>
      <p className={styles.technologies__text}>
        Мы используем только необходимый набор технологий, необходимый для
        реализации вашей задачи
      </p>
      <div className={styles.technologies__cards}>
        {technologiesData.map((data, parentIndex) => (
          <React.Fragment key={parentIndex + data.sectionName}>
            <h3 className={styles.technologies__sectionTitle}>
              {data.sectionName}
            </h3>
            {data.technologies.map(({ items, title }, index) => (
              <React.Fragment key={title + index}>
                <h4 className={styles.technologies__subtitle}>{title}</h4>
                <div className={styles.technologies__row} key={index}>
                  {items.map((item, childIndex) => (
                    <div
                      className={styles.technologies__card}
                      key={item.title + childIndex}
                    >
                      <img
                        src={`${url}/storage/${item.icon}`}
                        alt="technologies icon"
                        className={styles.technologies__icon}
                      />
                      <p className={styles.technologies__cardTitle}>
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default memo(technologies);
