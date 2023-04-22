import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import outLogo from 'src/assets/krestik.png';

import styles from './loginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBlock}>
        <ul>
          <li>
            <NavLink
              to="authorization"
              relative="route"
              className={({ isActive }) => (isActive ? styles.active : styles.noactive)}
            >
              Вход
            </NavLink>
          </li>
          <li>
            <NavLink
              to="registration"
              relative="route"
              className={({ isActive }) => (isActive ? styles.active : styles.noactive)}
            >
              Регистрация
            </NavLink>
          </li>
        </ul>
        <img src={outLogo} />
      </div>
      <Outlet />
    </div>
  );
};
