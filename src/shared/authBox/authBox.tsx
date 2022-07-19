import React, { FC } from 'react';
import styles from './authbox.module.scss';
interface IProps {
  width?: string;
  header?: any;
  body?: any;
}

/**
 * @author
 * @function @AuthBox
 **/

export const AuthBox: FC<IProps> = (props) => {
  return (
    <div style={{ width: props.width || '480px' }} className={styles.authbox}>
      {props.header}
      {props.body}
    </div>
  );
};
