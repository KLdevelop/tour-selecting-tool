import React from 'react';
import { TypeCard } from '../FilterElem';
import { DataPlaceFilter } from '../FilterElem';
import typeImg from 'src/assets/filterIcon/typeImage.png';
import styles from './FilterHeader.module.scss';

export const FilterHeader = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={styles.filterHeader}>
      <DataPlaceFilter />
      <div className={styles.filterHeader_cards}>
        {arr.map((_, ind) => (
          <TypeCard image={typeImg} type="Все" key={ind} />
        ))}
      </div>
    </div>
  );
};
