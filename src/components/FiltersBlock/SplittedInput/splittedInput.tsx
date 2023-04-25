import React, { Dispatch } from 'react';
import styles from './splittedInput.module.scss';
import { Range } from 'src/types/interfaces';

interface Props {
  leftLabel: string;
  rightLabel: string;
  range: Range;
  setValue: Dispatch<Range>;
}

export const SplittedInput = (props: Props) => {
  return (
    <div className={styles.splittedInput}>
      <div className={styles.left}>
        <span className={styles.label}>{props.leftLabel}</span>
        <input
          type="text"
          value={props.range.from}
          onChange={(e) => {
            const val = Number(Math.round(+e.target.value));
            props.setValue({
              from: !isNaN(val) ? val : props.range.from,
              to: props.range.to,
            });
          }}
        />
      </div>
      <div className={styles.right}>
        <span className={styles.label}>{props.rightLabel}</span>
        <input
          type="text"
          value={props.range.to}
          onChange={(e) => {
            const val = Number(Math.round(+e.target.value));
            props.setValue({
              from: props.range.from,
              to: !isNaN(val) ? val : props.range.to,
            });
          }}
        />
      </div>
    </div>
  );
};
