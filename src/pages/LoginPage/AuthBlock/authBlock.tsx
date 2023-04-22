import React from 'react';
import { lockIcon, userIcon } from 'src/assets/InputIcon';
import { CustomInput as Input, Button } from 'src/components';

import styles from './authBlock.module.scss';

export const AuthBlock = () => {
  return (
    <div className={styles.authBlock}>
      <Input icon={userIcon} placeholder="никнейм" />
      <Input type="password" icon={lockIcon} placeholder="пароль" />
      <Button>Войти</Button>
    </div>
  );
};
