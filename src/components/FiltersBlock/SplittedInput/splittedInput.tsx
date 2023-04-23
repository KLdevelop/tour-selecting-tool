import React from 'react';
import styles from './splittedInput.module.scss';

interface Props {
  leftLabel: string;
  rightLabel: string;
  onChangeLeft?: () => void;
  onChangeRight?: () => void;
}

export const SplittedInput = (props: Props) => {
  return (
    <div className={styles.splittedInput}>
      <div className={styles.left}>
        <span className={styles.label}>{props.leftLabel}</span>
        <input type="text" onChange={props.onChangeLeft} />
      </div>
      <div className={styles.right}>
        <span className={styles.label}>{props.rightLabel}</span>
        <input type="text" onChange={props.onChangeRight} />
      </div>
    </div>
  );
};
