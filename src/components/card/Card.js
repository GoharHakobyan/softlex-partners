import React, { useEffect } from 'react';
import styles from './card.module.scss';
import { animation } from '../../utils/animate';
import parse from 'html-react-parser';
import { navigate } from '@reach/router';
import { usePrevPathNameForAbout } from '../../hooks/usePrevPathName';

// import {url} from '../../constants/url'

const Card = ({
  title,
  subtitle,
  text,
  img,
  currentCard = 0,
  wordsToHightlight,
}) => {
  const { setCurrentPathAbout } = usePrevPathNameForAbout();

  useEffect(() => {
    animation[currentCard](); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const hadnleToAboutPage = () => {
    navigate('/aboutPage');
    setCurrentPathAbout('/');
  };
  function titleWithHightLight() {
    const titleWords = title.split(' ');
    const highlitedWords = wordsToHightlight.split(' ');
    const hightlightedElementsPosition = titleWords.findIndex(
      word => word === highlitedWords[0]
    );
    const remainingWords = titleWords
      .filter(
        (_, index) =>
          index > hightlightedElementsPosition + highlitedWords.length - 1
      )
      .join(' ');

    return (
      <h1
        className={`${styles.card__title} ${
          styles[`card__title_${currentCard + 1}`]
        }`}
      >
        <span>
          {titleWords.slice(0, hightlightedElementsPosition).join(' ')}{' '}
        </span>
        <span className={styles.card__hightlight}>{wordsToHightlight}</span>
        {remainingWords && <span> {remainingWords}</span>}
      </h1>
    );
  }

  return (
    <div className={styles.card}>
      {/* <div className={styles.card__pic} dangerouslySetInnerHTML={{__html:img}}></div> */}
      <div className={styles.card__pic}>{parse(`<div>${img}</div>`)}</div>

      <div className={`${styles.card__info} card__info`}>
        <div className={styles.card__flex}>
          <div className={styles.card__dot}></div>
          <h3 className={styles.card__subtitle}>{subtitle}</h3>
        </div>

        {titleWithHightLight()}
        <p
          className={`${styles.card__text} ${
            styles[`card__text_${currentCard + 1}`]
          }`}
        >
          {text}
        </p>
        <button className={styles.card__btn} onClick={hadnleToAboutPage}>
          Больше информации
        </button>
      </div>
    </div>
  );
};

export default Card;
