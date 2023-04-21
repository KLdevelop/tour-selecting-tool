import React from 'react';
import { lockIcon, userIcon } from 'src/assets/InputIcon';
import { Input } from 'src/components/Inp';

import styles from './authBlock.module.scss';

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
    </div>
  );
};
