import React, { memo } from 'react';

const ServiceCard = ({ styles, data, url }) => {
  return (
    <div className={styles.services__card}>
      <img
        src={`${url}/storage/${data.img}`}
        alt="services card icon"
        className={styles.services__img}
      />
      <div className={styles.services__info}>
        <h3 className={styles.services__card_subtitle}>{data.title}</h3>
        <p className={styles.services__card_text}>{data.text}</p>
      </div>
    </div>
  );
};

export default memo(ServiceCard);
