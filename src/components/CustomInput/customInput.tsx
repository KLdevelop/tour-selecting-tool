import React, { InputHTMLAttributes } from 'react';
import styles from './customInput.module.scss';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string;
}

export const CustomInput = (props: CustomInputProps) => {
  return (
    <div className={styles.customInput}>
      <img src={props.icon} alt="" className={styles.icon} />
      <input
        type={props.type || 'text'}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={styles.input}
      />
    </div>
  );
};
