import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import outLogo from 'src/assets/krestik.png';

import styles from './loginPage.module.scss';

export const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('auth');

  const navigate = useNavigate();
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBlock}>
        <ul>
          <li>
            <NavLink
              onClick={() => setActiveTab('auth')}
              to="authorization"
              relative="route"
              className={({ isActive }) => (isActive ? styles.active : styles.noactive)}
            >
              Вход
            </NavLink>
            <div
              className={activeTab === 'auth' ? styles.auth_stick_active : styles.auth_stick}
            ></div>
          </li>
          <li>
            <NavLink
              onClick={() => setActiveTab('reg')}
              to="registration"
              relative="route"
              className={({ isActive }) => (isActive ? styles.active : styles.noactive)}
            >
              Регистрация
            </NavLink>
            <div
              className={activeTab === 'reg' ? styles.auth_stick_active : styles.auth_stick}
            ></div>
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
