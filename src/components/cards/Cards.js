import React, { Children, useState, useEffect, useContext } from 'react';
// import { useMediaQuery } from 'react-responsive';

// import { cardsDesktopData, mobileCardsData } from '../../fixtures';
import { DataContext } from '../../fixtures/data';
import { animateMouse } from '../../utils/animate';

import CurrentPageIcon from '../../../static/img/current-item.svg';
import Mouse from '../../../static/img/mouse.svg';
import Hand from '../../../static/img/hand.svg';
import Card from '../card';

import styles from './cards.module.scss';
import { useInterval } from '../../hooks/useInterval';

const Cards = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  const [currentCard, setCurrentCardIndex] = useState(0);
  const context = useContext(DataContext);
  const { mainData } = context;
  const { cardsDesktopData } = mainData;
  const [isRunning, setIsRunning] = useState(true);
  // const cardsData = isMobile ? mobileCardsData : cardsDesktopData;
  const cardsData = cardsDesktopData;

  let swipeY = null;
  let isPageChanging = null;
  useInterval(
    () => {
      setCurrentCardIndex(prev =>
        prev >= cardsData.length - 1 ? 0 : prev + 1
      );
    },
    isRunning ? 5000 : null
  );
  useEffect(() => {
    window.addEventListener('wheel', handleScrollNavigation);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    animateMouse();

    return () => {
      window.removeEventListener('wheel', handleScrollNavigation);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleScrollNavigation(event) {
    setIsRunning(false);
    withPageChangingDelay(function () {
      if (event.deltaY < 0) {
        setCurrentCardIndex(prev =>
          prev <= 0 ? cardsData.length - 1 : prev - 1
        );
      } else {
        setCurrentCardIndex(prev =>
          prev >= cardsData.length - 1 ? 0 : prev + 1
        );
      }
    });
  }

  function withPageChangingDelay(cb) {
    if (!isPageChanging) {
      isPageChanging = true;
      cb();
      setTimeout(() => {
        isPageChanging = false;
        setIsRunning(true);
      }, 1500);
    }
  }

  function togglePages(index) {
    setCurrentCardIndex(index);
  }

  function handleTouchStart(event) {
    swipeY = event.touches[0].clientY;
  }

  function handleTouchMove(event) {
    withPageChangingDelay(function () {
      if (!swipeY) {
        return;
      }
      const newSwipeY = event.touches[0].clientY;
      const yDiff = swipeY - newSwipeY;

      if (yDiff > 0) {
        setCurrentCardIndex(prev =>
          prev >= cardsData.length - 1 ? 0 : prev + 1
        );
      } else {
        setCurrentCardIndex(prev =>
          prev <= 0 ? cardsData.length - 1 : prev - 1
        );
      }
    });
  }
  return (
    <section className={styles.wrapper}>
      <main className={styles.main}>
        {cardsData.map((card, index) => {
          return currentCard === index ? (
            <Card {...card} key={index} currentCard={currentCard} />
          ) : null;
        })}
      </main>
      <footer>
        <div className={styles.scrollPage}>
          <Mouse className={styles.mouse} />
          <Hand className={styles.hand} />
        </div>
      </footer>
      <div className={styles.nav}>
        {Children.toArray(
          [...new Array(4)].map((_, index) =>
            currentCard === index ? (
              <CurrentPageIcon className={styles.nav__icon} />
            ) : (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                className={styles.nav__dot}
                onClick={() => togglePages(index)}
                onKeyDown={() => togglePages(index)}
              ></div>
            )
          )
        )}
      </div>
    </section>
  );
};

export default Cards;
