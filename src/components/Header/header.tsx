import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mapIcon } from 'src/assets/HeaderIcon';
import styles from './header.module.scss';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <span className={styles.tab}>Главная</span>
      <span className={styles.tab}>Обзор</span>
      <span className={styles.tab}>О нас</span>
      <span className={styles.title}>По пути</span>
      <span className={styles.tab}>Рассчитать</span>
      <span className={styles.tab} onClick={() => navigate('/login/authorization')}>
        Войти
      </span>
      <span>
        <img src={mapIcon} alt="" className={styles.map} />
      </span>
    </div>
  );
};
