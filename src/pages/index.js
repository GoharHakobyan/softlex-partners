import React, { useEffect } from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import Cards from '../components/cards';
import noScroll from 'no-scroll';
import { animateScroll as scroll } from 'react-scroll';

function Home() {
  const pageManegar = () => {
    scroll.scrollToTop();
    noScroll.on();
  };
  useEffect(() => {
    pageManegar();
    return () => {
      noScroll.off();
    };
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>SoftLex | Разработка мобильных приложений и веб сервисов</title>
      </Helmet>
      <Cards />
    </Layout>
  );
}
export default Home;
