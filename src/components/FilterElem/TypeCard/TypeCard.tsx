import React from 'react';
import styles from './TypeCard.module.scss';
interface typeCardProps {
  image: string;
  type: string;
}

export const TypeCard = (props: typeCardProps) => {
  return (
    <div className={styles.typeCard}>
      <img src={props.image} alt="" className={styles.typeCard_img} />
      <div className={styles.typeCard_name}>{props.type}</div>
    </div>
  );
};
