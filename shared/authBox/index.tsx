import React, { FC } from "react";
import styles from "./authbox.module.scss";
interface IProps {
  width?: string | number;
  header?: any;
  body?: any;
  style?: any;
}

/**
 * @author
 * @function @AuthBox
 **/

export const AuthBox: FC<IProps> = (props) => {
  return (
    <div
      style={{ width: props.width || 490, ...props.style }}
      className={styles.authbox}
    >
      {props.header}
      {props.body}
    </div>
  );
};
