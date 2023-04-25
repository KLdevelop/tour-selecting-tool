import React from 'react';
import searchFilter from 'src/assets/filterIcon/searchFilter.svg';
import styles from './PlaceFilter.module.scss';

// interface PlaceFilterProps {
//   test: string;
// }

export const PlaceFilter = () => {
  return (
    <div className={styles.placeFilter}>
      <input type="text" placeholder="Куда вы хотите?" className={styles.placeFilter_inp} />
      <img src={searchFilter} className={styles.placeFilter_img} />
    </div>
  );
};
