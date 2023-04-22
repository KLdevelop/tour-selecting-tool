import React, { useState } from 'react';
import { SearchInput, MainImageCard } from 'src/components';
import picImageCard from 'src/assets/test.png';
import { mainPagePic, searchIcon } from 'src/assets/Images';

import styles from './mainPage.module.scss';

export const MainPage = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const category = [
    {
      name: 'Все',
      status: true,
    },
    {
      name: 'Исторические',
      status: false,
    },
    {
      name: 'Туризм',
      status: false,
    },
  ];

  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPageCard}>
        <div className={styles.mainPageCardDiv}>
          <div className={styles.mainPageCardLeft}>
            <img src={mainPagePic} className={styles.picBG} alt="main page pic" />
          </div>
          <div className={styles.mainPageCardRight}>
            <div className={styles.search_block}>
              <SearchInput icon={searchIcon} placeholder="Поиск" />
              <div className={styles.searchInp_stick}></div>
            </div>
            <div className={styles.category_block}>
              <p className={styles.category_block_title}>Коллекции</p>
              <div className={styles.categories}>
                {category.map((i, ind) => (
                  <div key={ind} className={styles.categoriesBlock}>
                    <div
                      onClick={() => setActiveCategory(i.name)}
                      className={
                        i.name == activeCategory ? styles.activedCategory : styles.category
                      }
                    >
                      {i.name}
                    </div>
                    <div
                      className={i.name == activeCategory ? styles.categoryStickActive : ''}
                    ></div>
                  </div>
                ))}
              </div>
              <div className={styles.imageCards}>
                <MainImageCard image={picImageCard} />
                <MainImageCard image={picImageCard} />
                <MainImageCard image={picImageCard} />
              </div>
            </div>
            <p className={styles.more}>Показать ещё</p>
          </div>
        </div>
      </div>
    </div>
  );
};
