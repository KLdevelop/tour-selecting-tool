import React from 'react';
import { FilterHeader, ProductCard, FiltersBlock } from 'src/components';
import alpPic from 'src/assets/Images/alp.png';
import styles from './overviewPage.module.scss';

export const OverviewPage = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className={styles.overviewPage}>
      <FilterHeader />
      <div className={styles.mainBlock}>
        <div className={styles.filtersBlock}>
          <FiltersBlock />
        </div>
        <div className={styles.cardsBlock}>
          <p className={styles.findLabel}>Найдено {arr.length} туров</p>
          <div className={styles.overviewPage_product}>
            {arr.map((_, i) => (
              <ProductCard
                key={i}
                image={alpPic}
                tag="Походы"
                location="Россия, Камчатка"
                title="Все лучшее на Камчатке? Без палаток? Да!"
                description="В самый разгар лета 2023 года, мы подготовили для вас уникаcnwnfownroВ самый разгар лета 2023 года, мы подготовили для вас уникаcnwnfownroВ самый разгар лета 2023 года, мы подготовили для вас уникаcnwnfownroВ самый разгар лета 2023 года, мы подготовили для вас уникаcnwnfownro"
                price={1_445}
                date="2 - 8 июл."
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
