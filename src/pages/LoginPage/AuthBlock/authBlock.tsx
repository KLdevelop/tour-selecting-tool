import React from 'react';
// import { InputText } from 'src/components/Input/component/InputText/InputText';
import styles from './authBlock.module.scss';
import lockIcon from 'src/assets/InputIcon/lockIcon.png';

export const AuthBlock = () => {
  return (
    <div className={styles.authBlock}>
      <h1>Auth</h1>
      <div className={styles.inputBlock}>
        <div className={styles.inputBlockLogo}>
          <img src={lockIcon} />
        </div>
        <input type="text" className={styles.inputBlockInp} />
      </div>
    </div>
  );
};
