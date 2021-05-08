import React from 'react';
import styles from './footer.module.scss';

import { contactData } from '../../fixtures';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copyright}>
        <span className={styles.footer__copyright_icon}>©</span>2014-2020
        Softlex
      </p>
      <div className={styles.footer__contact}>
        {contactData.map((data, index) => (
          <div className={styles.footer__contact_container} key={index}>
            <h4 className={styles.footer__contact_title}>
              {data.title + ' :'}
            </h4>
            {data.info.map((item, childIndex) => (
              <p
                key={data.title + childIndex}
                className={styles.footer__contact_info}
              >
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.footer__follow}>
        <p>Следуйте за нами:</p>
        <img src="/img/vcru.svg" alt="vc.ru" />
      </div>
      <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> <div className="clutch-widget" data-url="[https://widget.clutch.co|https://widget.clutch.co/]" data-widget-type="2" data-height="50" data-darkbg="1" data-clutchcompany-id="1350737"></div>
    </footer>
  );
};

export default Footer;
