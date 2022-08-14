import React, { FC, useEffect } from 'react';

interface IProps {}

/**
 * @author
 * @function @ServersChannel
 **/

export const ServersChannel: FC<IProps> = (props) => {
  useEffect(() => {
    console.log('@server');
  }, []);
  return <div>ServersChannel</div>;
};
