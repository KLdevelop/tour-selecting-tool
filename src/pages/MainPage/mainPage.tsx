import React from 'react';
import { Link } from 'react-router-dom';

import styles from './mainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
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
