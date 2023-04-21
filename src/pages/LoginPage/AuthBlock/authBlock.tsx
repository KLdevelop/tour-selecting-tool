import React from 'react';
import styles from './authBlock.module.scss';
import { Button } from 'src/components/Button';

export const AuthBlock = () => {
  return (
    <div className={styles.authBlock}>
      <h1>Auth</h1>
      <Button>Text</Button>
    </div>
  );
};
