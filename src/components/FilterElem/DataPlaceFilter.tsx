import React from 'react';
import { DataFilter } from './DataFilter';
import { PlaceFilter } from './PlaceFilter';
import styles from './DataPlaceFilter.module.scss';

// interface DataPlaceFilterProps {
//   test: string;
// }

export const DataPlaceFilter = () => {
  return (
    <div className={styles.dataplaceFilter}>
      <PlaceFilter />
      <div className={styles.dataplaceFilter_horiz_stick}></div>
      <DataFilter test="" />
    </div>
  );
};
