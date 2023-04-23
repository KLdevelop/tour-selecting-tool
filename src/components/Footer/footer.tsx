import React from 'react';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContent}>
        <div className={styles.contacts}>
          <p className={styles.blockName}>Контакты</p>
          <div>
            8 800 222 5748 <br />
            +7 965 633 83 77 <br />
            +7 937 430 00 03 <br />
            +7 906 156 62 00 +7 927 289 94 75 <br />
            (Viber, Whatsapp, Telegram)
          </div>
        </div>
        <div className={styles.tourists}>
          <p className={styles.blockName}>Туристам</p>
          <div>
            <p>Правила и условия</p>
            <p>Политика конфиденциальности</p>
            <p>Коммерческие предложения</p>
          </div>
        </div>
        <div className={styles.company}>
          <p className={styles.blockName}>Компания</p>
          <div>
            <p>О нас</p>
            <p>Услуги</p>
            <p>Видео</p>
            <p>Контакты</p>
          </div>
        </div>
      </div>
      <span className={styles.line} />
      <p className={styles.copyright}>© Copyright, 2023</p>
    </footer>
  );
};
