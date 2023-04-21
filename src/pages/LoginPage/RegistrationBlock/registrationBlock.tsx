import React from 'react';
import styles from './registrationBlock.module.scss';
import userIcon from 'src/assets/InputIcon/userIcon.png';
import lockIcon from 'src/assets/InputIcon/lockIcon.png';
import emailIcon from 'src/assets/InputIcon/emailIcon.png';
import { Input } from 'src/components/Inp';
import { Button } from 'src/components/Button';

export const RegistrationBlock = () => {
  return (
    <div className={styles.registrationBlock}>
      <div className={styles.inputBlock}>
        <div className={styles.inputBlockLogo}>
          <img src={emailIcon} />
        </div>
        <Input placeholder="почта" />
      </div>
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
