import React, { useState } from 'react';
import { DropdownBlock } from './DropdownBlock';
import { SplittedInput } from './SplittedInput';
import styles from './filtersBlock.module.scss';

export const FiltersBlock = () => {
  const [durationRange, setDuration] = useState({ from: 0, to: 36 });
  const [priceRange, setPrice] = useState({ from: 0, to: 100000 });

  return (
    <div className={styles.filtersBlock}>
      <DropdownBlock title="Длительность">
        <SplittedInput
          leftLabel="От (дней)"
          rightLabel="До (дней)"
          range={durationRange}
          setValue={setDuration}
        />
      </DropdownBlock>
      <DropdownBlock title="Тип тура">
        <div className={styles.tourTypes}>
          <div className={styles.option}>
            <input type="checkbox" id="first" />
            <label htmlFor="first">Походы</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="second" />
            <label htmlFor="second">Горящие туры</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="third" />
            <label htmlFor="third">От местных</label>
          </div>
        </div>
      </DropdownBlock>
      <DropdownBlock title="Цена">
        <SplittedInput leftLabel="От" rightLabel="До" range={priceRange} setValue={setPrice} />
      </DropdownBlock>
    </div>
  );
};
