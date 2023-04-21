import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import styles from './loginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBlock}>
        <ul>
          <li>
            <Link to="authorization" relative="route">
              Войти
            </Link>
          </li>
          <li>
            <Link to="registration" relative="route">
              Зарегистрироваться
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
