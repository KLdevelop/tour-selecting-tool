import React from 'react';
import { DropdownBlock } from './DropdownBlock';
import styles from './filtersBlock.module.scss';
import { SplittedInput } from './SplittedInput';

export const FiltersBlock = () => {
  return (
    <div className={styles.filtersBlock}>
      <DropdownBlock title="Длительность">
        <SplittedInput leftLabel="От (дней)" rightLabel="До (дней)" />
      </DropdownBlock>
      <DropdownBlock title="Тип тура"></DropdownBlock>
      <DropdownBlock title="Цена">
        <SplittedInput leftLabel="От" rightLabel="До" />
      </DropdownBlock>
    </div>
  );
};
