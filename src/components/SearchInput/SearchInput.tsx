import React, { InputHTMLAttributes } from 'react';
import styles from './SearchInput.module.scss';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string;
}

export const SearchInput = (props: SearchInputProps) => {
  return (
    <div className={styles.searchInput}>
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
