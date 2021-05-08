import React, { memo } from 'react';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import { animateScroll as scroll } from 'react-scroll';
import MenuIcon from '../../../static/img/burger.svg';
import MenuCrossIcon from '../../../static/img/menuCrossIcon.svg';

import styles from './header.module.scss';
import { remove_trailing_slesh } from '../../utils/remove';
import {
  usePrevPathName,
  usePrevPathNameForAbout,
} from '../../hooks/usePrevPathName';

const Header = ({ location }) => {
  const { setCurrentPath } = usePrevPathName(location.pathname);
  const { setCurrentPathAbout } = usePrevPathNameForAbout();

  const currentPath = remove_trailing_slesh(location.pathname);
  const isMenuPage = currentPath === '/menu';
  const handleToggleAbout = () => {
    setCurrentPath(location.pathname);
    setCurrentPathAbout(location.pathname);
    setTimeout(() => {
      scroll.scrollToBottom();
    }, 500);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <Link to="/">
          <img src="/img/logo.svg" alt="logo" className={styles.header__logo} />
        </Link>
        <a href="tel:79778186689x" className={styles.header__phone}>
          +7 (977) 818-66-89
        </a>
        <Link
          onClick={handleToggleAbout}
          className={styles.header__bold}
          to={`/aboutPage`}
        >
          Отправить заявку <span className={styles.plus}>+</span>
        </Link>
      </div>
      <div className={styles.header__menu}>
        {/* <p className={styles.header__lang}>Ru</p> */}
        <Link
          to={`${!isMenuPage ? '/menu' : '/'}`}
          state={{ prevPath: currentPath }}
        >
          {!isMenuPage ? (
            <MenuIcon className={styles.header__icon} />
          ) : (
            <MenuCrossIcon className={styles.header__cross} />
          )}
        </Link>
      </div>
    </header>
  );
};

const HeaderWithLocationProps = props => (
  <Location>{locatinProps => <Header {...props} {...locatinProps} />}</Location>
);

export default memo(HeaderWithLocationProps);
