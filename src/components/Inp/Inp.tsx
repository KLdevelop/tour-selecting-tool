import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';
type Props = InputHTMLAttributes<HTMLInputElement> & {
  someProp?: never;
};

export const Input: React.FC<Props> = ({ ...rest }) => {
  return <input className={styles.inputBlockInp} type="text" {...rest} />;
};
