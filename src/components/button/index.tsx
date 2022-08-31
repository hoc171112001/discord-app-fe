import React, { FC } from 'react';
import styles from './button.module.scss';
interface IProps {
  children: any;
}

/**
 * @author
 * @function @BtnDiscord
 **/

export const BtnDiscord: FC<IProps> = ({ children }) => {
  return <div className={styles.btn__discord}>{children}</div>;
};
