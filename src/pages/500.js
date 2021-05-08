import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import styles from '../styles/pages/500.module.scss';

import ErrorImg from '../../static/img/server-error.svg';

const Error = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>SoftLex | Разработка мобильных приложений и веб сервисов</title>
      </Helmet>
      <ErrorImg className={styles.errorImg} />
      <h3 className={styles.errorText}>
        Мы уже разбираемся в чем дело. Рекомендуем посетить не менее интересную
        страницу <Link to="/">"О нас"</Link>
      </h3>
      <Link to="/">
        <img src="/img/logo.svg" alt="logo" className={styles.logo} />
      </Link>
    </div>
  );
};

export default Error;
