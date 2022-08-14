import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { MeChannel } from './@me';
import { ServersChannel } from './servers';

interface IProps {}

/**
 * @author
 * @function @ChannelComponent
 **/

export const ChannelComponent: FC<IProps> = (props) => {
  const location = useLocation();
  return location.pathname === '/channels/@me' ? <MeChannel /> : <ServersChannel />;
};
