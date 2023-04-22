import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import outLogo from 'src/assets/krestik.png';

import styles from './loginPage.module.scss';

export const LoginPage = () => {
  const navigate = useNavigate();
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
        <img
          src={outLogo}
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
      <Outlet />
    </div>
  );
};
