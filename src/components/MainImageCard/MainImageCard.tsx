import React, { InputHTMLAttributes } from 'react';
import NavIcon from 'assets/NavIcon.png';

import styles from './MainImageCard.module.scss';

interface MainImageCardProps extends InputHTMLAttributes<HTMLInputElement> {
  image: string;
}

export const MainImageCard = (props: MainImageCardProps) => {
  return (
    <div className={styles.mainImageCard} style={{ backgroundImage: `url(${props.image})` }}>
      <div className={styles.bottom}>
        <img src={NavIcon} className={styles.mainImageCard_navIcon} />
        <p className={styles.mainImageCard_text}>Путешествие по fsdlkhflwflwehl</p>
      </div>
    </div>
  );
};
