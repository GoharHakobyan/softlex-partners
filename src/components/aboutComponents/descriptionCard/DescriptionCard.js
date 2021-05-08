import React, { memo } from 'react';

function DescriptionCard({ styles, data, url, cooperation }) {
  return (
    <div
      className={cooperation ? styles.cooperation__card : styles.about__card}
    >
      <img
        className={cooperation ? styles.cooperation__img : styles.about__img}
        src={`${url}/storage/${data.img}`}
        alt="card-icon"
        height={data.height}
        width={data.width}
      />
      <div className={cooperation ? '' : styles.about__info}>
        <h3
          className={
            cooperation ? styles.cooperation__card_title : styles.about__title
          }
        >
          {data.title}
        </h3>
        <p
          className={
            cooperation ? styles.cooperation__card_text : styles.about__text
          }
        >
          {data.text}
        </p>
      </div>
    </div>
  );
}

export default memo(DescriptionCard);
