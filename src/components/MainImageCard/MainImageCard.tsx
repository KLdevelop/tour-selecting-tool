import React, { InputHTMLAttributes } from 'react';
import NavIcon from 'assets/NavIcon.png';

import styles from './MainImageCard.module.scss';

interface MainImageCardProps extends InputHTMLAttributes<HTMLInputElement> {
  image: string;
}

export const MainImageCard = (props: MainImageCardProps) => {
  return (
    <div className={styles.mainImageCard}>
      <img src={props.image} className={styles.mainImageCard_pic} />
      <img src={NavIcon} className={styles.mainImageCard_navIcon} />
      <p className={styles.mainImageCard_text}>Путешествие по fsdlkhflwflwehl</p>
    </div>
  );
};
