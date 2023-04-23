import React from 'react';
import styles from './ProductCard.module.scss';
interface productCardProps {
  key: number;
  image: string;
  tag: string | undefined;
  location: string;
  title: string;
  description: string;
  price: number;
  date: string;
}

export const ProductCard = (props: productCardProps) => {
  return (
    <div className={styles.productCard} key={props.key}>
      <div className={styles.productCard_img} style={{ backgroundImage: `url(${props.image})` }}>
        {props.tag === undefined ? null : <div className={styles.productCard_tag}>{props.tag}</div>}
      </div>
      <div className={styles.productCard_info}>
        <div className={styles.productCard_location}>{props.location}</div>
        <div className={styles.productCard_title}>{props.title}</div>
        <div className={styles.productCard_description}>{props.description}</div>
        <div className={styles.productCard_price}>РУБ {props.price}</div>
        <div className={styles.productCard_date}>{props.date}</div>
      </div>
    </div>
  );
};
