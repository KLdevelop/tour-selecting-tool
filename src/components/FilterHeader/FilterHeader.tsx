import React from 'react';
import { TypeCard } from '../FilterElem';
import { DataPlaceFilter } from '../FilterElem';
import typeImg from 'src/assets/filterIcon/typeImage.png';
import styles from './FilterHeader.module.scss';

export const FilterHeader = () => {
  const arr = ['Все', 'Походы', 'Горящие туры', 'Исторические места', 'От местных'];
  return (
    <div className={styles.filterHeader}>
      <DataPlaceFilter />
      <div className={styles.filterHeader_cards}>
        {arr.map((card) => (
          <TypeCard image={typeImg} type={card} key={card} />
        ))}
      </div>
    </div>
  );
};
