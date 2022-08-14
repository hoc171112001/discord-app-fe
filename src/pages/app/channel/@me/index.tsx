import React, { FC, useEffect } from 'react';

interface IProps {}

/**
 * @author
 * @function @MeChannel
 **/

export const MeChannel: FC<IProps> = (props) => {
  useEffect(() => {
    console.log('@me');
  }, []);
  return <div>MeChannel</div>;
};
