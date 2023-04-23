import React, { useState } from 'react';
import { dropdownArrow } from 'src/assets/Images';
import styles from './dropdownBlock.module.scss';

interface Props {
  title: string;
  children?: JSX.Element;
}

export const DropdownBlock = (props: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.dropdownBlock}>
      <div className={styles.top} onClick={() => setShow(!show)}>
        <p className={styles.title}>{props.title}</p>
        <img
          src={dropdownArrow}
          alt="v"
          className={show ? styles.dropdownUp : styles.dropdownArrow}
        />
      </div>
      {show && props.children}
    </div>
  );
};
