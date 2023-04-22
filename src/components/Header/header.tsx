import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mapIcon } from 'src/assets/HeaderIcon';
import styles from './header.module.scss';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <span className={styles.tab} onClick={() => navigate('/')}>
          Главная
        </span>
        <span className={styles.tab} onClick={() => navigate('/overview')}>
          Обзор
        </span>
        <span className={styles.tab} onClick={() => navigate('/about')}>
          О нас
        </span>
      </div>
      <span className={styles.title}>По пути</span>
      <div className={styles.rightHeader}>
        <span className={styles.tab}>Рассчитать</span>
        <span className={styles.tab} onClick={() => navigate('/login')}>
          Войти
        </span>
        <img src={mapIcon} alt="" className={styles.map} />
      </div>
    </div>
  );
};
