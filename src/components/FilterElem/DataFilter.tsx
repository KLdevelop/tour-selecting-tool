import React from 'react';
import styles from './DataFilter.module.scss';
// import './test.css';

interface DataFilterProps {
  test: string;
}

const disablePastDate = () => {
  const today = new Date();
  const dd = String(today.getDate() + 1).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
};
export const DataFilter = (props: DataFilterProps) => {
  return (
    <div className={styles.dataFilter}>
      {props.test}
      <input type="date" className={styles.dataFilter_inp} min={disablePastDate()} title="test" />
    </div>
  );
};
