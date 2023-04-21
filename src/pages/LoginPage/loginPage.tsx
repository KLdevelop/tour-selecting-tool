import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import styles from './loginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBlock}>
        <ul>
          <li>
            <Link to="../authorization" relative="path">
              Войти
            </Link>
          </li>
          <li>
            <Link to="../registration" relative="path">
              Зарегистрироваться
            </Link>
          </li>
        </ul>
      </div>
      {/* <Input type="text" /> */}
      <Outlet />
    </div>
  );
};
