import React, { memo } from 'react';

const OpacityCard = ({ styles, data, url }) => {
  return (
    <div className={styles.opacity__card}>
      <div className={styles.opacity__imgContainer}>
        <img
          className={styles.opacity__img}
          src={`${url}/storage/${data.img}`}
          alt="card-icon"
        />
      </div>
      <div className={styles.about__info}>
        <h3 className={styles.about__title}>{data.title}</h3>
        <p className={styles.about__text}>{data.text}</p>
      </div>
    </div>
  );
};

export default memo(OpacityCard);
