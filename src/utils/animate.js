import anime from 'animejs/lib/anime.es.js';
/* where key is frame index on main page */
export const animation = {
  0: () => {
    handlePageChanging('mountain');
    setTimeout(() => {
      [...new Array(3)].forEach((_, index) => {
        try {
          const path = anime.path(`.cloud-${index + 1}-path`);
          anime({
            targets: `.cloud-${index + 1}`,
            translateX: path('x'),
            opacity: [
              { value: 0, duration: 0, easing: 'easeOutExpo' },
              { value: 1, duration: 500 },
              {
                value: 0,
                duration: 1000,
                delay: 10000 + index * 1000,
                easing: 'linear',
              },
            ],
            easing: 'linear',
            duration: 12000 + index * 1000,
            loop: true,
          });
        } catch (err) {
          console.log(err);
        }
      });
    }, 0);
  },
  1: () => {
    handlePageChanging('services');

    const timeline = anime.timeline({
      targets: '.services .baseline, .services .person, .services .box',
      delay: anime.stagger(500, { start: 1000 }),
      duration: 1000,
      easing: 'easeInOutSine',
    });

    timeline
      .add({
        opacity: 1,
      })
      .add({
        targets: '.services .box-border',
        duration: 200,
        opacity: 0.4,
        delay: anime.stagger(200),
      })
      .add({
        targets: '.services .box-line',
        delay: anime.stagger(100),
        duration: 100,
        opacity: 1,
      });

    [...new Array(4)].forEach((_, index) => {
      timeline
        .add({
          targets: `.services .circle-${index + 1}-line`,
          delay: anime.stagger(100, {
            direction: `${index === 1 ? 'reverse' : ''}`,
          }),
          duration: 100,
          opacity: 1,
        })
        .add({
          targets: `.services .circle-${index + 1}`,
          duration: 600,
          opacity: 1,
          delay: 300,
        });
    });

    timeline.add({
      targets: '.services .bg-item',
      delay: anime.stagger(300),
      duration: 500,
      opacity: 1,
    });
  },
  2: () => {
    handlePageChanging('expirience');
    anime({
      targets: '.expirience .sand',
      d:
        'M 347 201 C 342 202 324 205 314 207 C 293 207 300 206 292 205 L 274 202 L 268 203 C 267 204 265 205 264 206 L 263 207 L 261.591 208.939 C 261.591 208.939 260.999 210.719 261 211.656 V 216.479 C 261 230.222 306.38 265.932 306.38 265.932 C 307.09 266.482 307.665 267.186 308.061 267.991 C 308.061 267.991 308.664 269.679 308.666 270.575 V 344.467 C 308.66 345.709 307.777 348.032 307.777 348.032 C 307.199 349.133 305.341 350.79 305.341 350.79 C 297.875 355.99 285.297 371.222 285.297 371.222 H 309.075 H 332.853 C 332.853 371.222 320.157 356.171 313 350.722 L 312.013 349.742 L 311.027 348.762 C 310.577 347.856 310.343 346.859 310.343 345.849 V 270.555 C 310.343 269.664 310.932 267.981 310.932 267.981 C 311.319 267.178 312.579 265.912 312.579 265.912 C 321.882 258.485 357 229.603 357 216.319 V 207.888 C 356.999 206.873 356.401 204.931 356.401 204.931 C 356.007 203.994 355 203 354.704 202.432 C 353.978 201.719 353 201 351 201 L 348 201 Z',
      duration: 1650,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
    });
  },
  3: () => {
    handlePageChanging('technologies');

    setTimeout(() => {
      anime({
        targets: '.technologies .circle',
        duration: 2000,
        rotate: '1turn',
        loop: true,
        easing: 'linear',
      });

      anime({
        targets: '.technologies .box-shadow, .technologies .play',
        direction: 'alternate',
        duration: 1250,
        delay: 800,
        scale: '0.92',
        stdDeviation: 2,
        loop: true,
        easing: 'easeInOutQuad',
      });

      anime({
        targets: '.technologies .stripe',
        direction: 'alternate',
        duration: 1250,
        delay: anime.stagger(200, { start: 750 }),
        scaleX: '1.7',
        loop: true,
        easing: 'linear',
      });

      anime({
        targets: '.technologies .hand',
        d:
          'M214.91 304.312C214.91 304.312 218.608 305.265 220.398 305.384C222.187 305.504 230.594 302.167 233.218 302.644C235.842 303.12 252.725 311.283 253.441 311.819C254.216 312.415 252.965 313.487 252.965 313.487L213.424 312.057L214.91 304.312Z',
        duration: 1100,
        loop: 7,
        direction: 'alternate',
        easing: 'easeInOutQuad',
        delay: 150,
      });

      anime
        .timeline({
          targets: '.technologies .box',
          duration: 1200,
          easing: 'easeInOutQuad',
          delay: anime.stagger(2000, { start: 1300 }),
        })
        .add({
          opacity: 1,
        })
        .add({
          targets: '.technologies .wave',
          opacity: 1,
          duration: 500,
          delay: anime.stagger(500, { start: 1000 }),
        })
        .add({
          targets: '.technologies .line',
          opacity: 1,
          duration: 500,
          delay: anime.stagger(200, { start: 1500 }),
        });
    }, 1300);
  },
};

function handlePageChanging(svg) {
  anime({
    targets: 'main .' + svg,
    translateY: ['70vh', 0],
    duration: 1500,
    opacity: 1,
    easing: 'easeInOutQuad',
  });

  anime({
    targets:
      '.card__info div, .card__info h1, .card__info p, .card__info button',
    translateY: ['70vh', 0],
    duration: 1500,
    opacity: 1,
    delay: anime.stagger(100, { start: 600 }),
    easing: 'easeInOutQuad',
  });
}

export const animateMouse = () => {
  anime({
    targets: '.mouse, .arrow',
    keyframes: [{ translateY: 12 }, { translateY: 2 }],
    direction: 'alternate',
    duration: 2500,
    loop: true,
    easing: 'easeInOutQuad',
    autoplay: true,
  });

  anime({
    targets: '.arrow',
    keyframes: [{ translateY: 10 }, { translateY: -2 }],
    translateY: 10,
    direction: 'alternate',
    duration: 2500,
    loop: true,
    autoplay: true,
    easing: 'linear',
  });
};
