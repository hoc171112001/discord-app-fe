import React, { FC, useEffect } from 'react';
import { useModal } from '../../../../shared/Hooks/modal';

interface IProps {}

/**
 * @author
 * @function @MeChannel
 **/

export const MeChannel: FC<IProps> = (props) => {
  const modal = useModal();
  useEffect(() => {
    console.log('@me');
  }, []);
  const onOpenSearchModal = () => {
    modal.openModalConfirm('search', 'deo biet noi j', true);
  };
  return (
    <div className="personal_wrapper">
      <div className="main_func_wrapper">
        <div className="main_func_wrapper__sidebar">
          <div className="searchbar">
            <div className="search_btn" onClick={onOpenSearchModal}>
              Search or start the conversation
            </div>
          </div>
          <div className="list__interactive">
            <div className="list__dm">list dm</div>
          </div>
          <div className="personal_controller">controller</div>
        </div>
        <div className="main_func_wrapper__content">
          <div className="topbar">Topbar</div>
        </div>
      </div>
    </div>
  );
};
