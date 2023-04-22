import React from 'react';
import { mapIcon } from 'src/assets/HeaderIcon';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.tab}>Главная</span>
      <span className={styles.tab}>Обзор</span>
      <span className={styles.tab}>О нас</span>
      <span className={styles.title}>По пути</span>
      <span className={styles.tab}>Рассчитать</span>
      <span className={styles.tab}>Войти</span>
      <span>
        <img src={mapIcon} alt="" className={styles.map} />
      </span>
    </div>
  );
};
