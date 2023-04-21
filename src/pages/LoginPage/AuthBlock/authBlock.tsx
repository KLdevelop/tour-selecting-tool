import React from 'react';
// import { InputText } from 'src/components/Input/component/InputText/InputText';
import styles from './authBlock.module.scss';
import userIcon from 'src/assets/InputIcon/userIcon.png';
import lockIcon from 'src/assets/InputIcon/lockIcon.png';
import { Input } from 'src/components/Inp';
import { Button } from 'src/components/Button';

export const AuthBlock = () => {
  return (
    <div className={styles.authBlock}>
      <div className={styles.inputBlock}>
        <div className={styles.inputBlockLogo}>
          <img src={userIcon} />
        </div>
        <Input placeholder="никнейм" />
      </div>
      <div className={styles.inputBlock}>
        <div className={styles.inputBlockLogo}>
          <img src={lockIcon} />
        </div>
        <Input placeholder="пароль" />
      </div>
      <Button>Войти</Button>
    </div>
  );
};
