import React, { FC } from 'react';
import styles from './button.module.scss';
interface IProps {
  children: any;
  onClick?: any;
}

/**
 * @author
 * @function @BtnDiscord
 **/

export const BtnDiscord: FC<IProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.btn__discord}>
      {children}
    </div>
  );
};
