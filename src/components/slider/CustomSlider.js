import React, { useState } from 'react';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

import ArrowSmLeft from '../../../static/img/arrow-sm-left.svg';
import ArrowSmRight from '../../../static/img/arrow-sm-right.svg';
import CurrentItem from '../../../static/img/current-item.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './slider.module.scss';

const CustomSlider = ({
  children,
  containerName,
  arrowsClassname,
  dots,
  setOuterCurrentSlider,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider, setSlider] = useState(null);

  const next = () => slider.slickNext();
  const prev = () => slider.slickPrev();

  const settings = {
    customPaging: function (i) {
      return i === currentSlide ? (
        <CurrentItem className={styles.item} />
      ) : (
        <div className={styles.dot}></div>
      );
    },
    appendDots: dots => (
      <div
        style={{
          position: 'static',
          marginTop: '25px',
        }}
      >
        {dots}
      </div>
    ),
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      setOuterCurrentSlider && setOuterCurrentSlider(next);
    },

    dots: dots && isMobile,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: !dots || !isMobile,
    swipeToSlide: true,
    adaptiveHeight: true,
  };
  return (
    <div className={containerName}>
      <Slider {...settings} ref={c => setSlider(c)}>
        {children}
      </Slider>
      <div className={arrowsClassname || styles.arrows}>
        <ArrowSmLeft onClick={prev} />
        <ArrowSmRight onClick={next} />
      </div>
    </div>
  );
};

export default CustomSlider;
