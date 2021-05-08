import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/footer';
import { Link } from 'gatsby';

import { menuItems } from '../fixtures';

import styles from '.././styles/pages/menu.module.scss';
import ErrorBoundary from '../ErrorBoundary';
import Layout from '../components/layout';
import {
  usePrevPathName,
  usePrevPathNameForAbout,
} from '../hooks/usePrevPathName';

const Menu = ({ location }) => {
  const { setCurrentPath } = usePrevPathName(location.pathname);
  const { setCurrentPathAbout } = usePrevPathNameForAbout();

  const handleToggleAbout = to => {
    setCurrentPath(location.pathname);
    if (to === '/aboutPage') {
      setCurrentPathAbout(location.pathname);
    }
  };
  return (
    <Layout>
      <ErrorBoundary>
        <div className={styles.wrapper}>
          <Helmet>
            <title>
              SoftLex | Разработка мобильных приложений и веб сервисов
            </title>
          </Helmet>

          <main className={styles.main}>
            <ul className={styles.list}>
              {menuItems.map(({ to, name, href }, index) => (
                <li className={styles.list__item} key={index}>
                  {to ? (
                    <Link
                      className={styles.link}
                      to={to}
                      onClick={() => handleToggleAbout(to)}
                    >
                      {name}
                    </Link>
                  ) : (
                    <a className={styles.link} href={href}>
                      {name}
                    </a>
                  )}
                  <img
                    className={styles.arrowIcon}
                    src="/img/arrow-right-thin.svg"
                    alt="arrow"
                  />
                </li>
              ))}
            </ul>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Layout>
  );
};

export default Menu;
