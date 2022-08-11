import React, { FC, useEffect } from 'react';

interface IProps {}

/**
 * @author
 * @function @ChannelComponent
 **/

export const ChannelComponent: FC<IProps> = (props) => {
  useEffect(() => {
    console.log('object');
  }, []);
  return <div>ChannelComponent</div>;
};
