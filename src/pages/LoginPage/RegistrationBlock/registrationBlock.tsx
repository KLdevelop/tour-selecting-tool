import React from 'react';
import { lockIcon, userIcon, emailIcon } from 'src/assets/InputIcon';
import { CustomInput as Input, Button } from 'src/components';
import styles from './registrationBlock.module.scss';

export const RegistrationBlock = () => {
  return (
    <div className={styles.registrationBlock}>
      <Input icon={emailIcon} placeholder="почта" />
      <Input icon={userIcon} placeholder="никнейм" />
      <Input icon={lockIcon} type="password" placeholder="пароль" />
      <Button>Войти</Button>
    </div>
  );
};
