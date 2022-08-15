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
  return (
    <div className="personal_wrapper">
      <div className="main_func_wrapper">
        <div className="main_func_wrapper__sidebar">
          <div className="searchbar">searchbar</div>
          <div className="list__interactive">List Interactive</div>
          <div className="personal_controller">controller</div>
        </div>
        <div className="main_func_wrapper__content">
          <div className="topbar">Topbar</div>
        </div>
      </div>
    </div>
  );
};
