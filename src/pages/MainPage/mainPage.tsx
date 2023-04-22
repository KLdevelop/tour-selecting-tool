import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'src/components';

import styles from './mainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <ul>
        <li>
          <Link to="/login/authorization">Войти</Link>
        </li>
        <li>
          <Link to="/login/registration">Зарегистрироваться</Link>
        </li>
      </ul>
    </div>
  );
};
