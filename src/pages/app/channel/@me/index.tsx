import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { mainApi } from '@config/axios/mainApi';
import { BtnDiscord } from '@components/button';
import { RootState } from '@redux/store';
import { useModal } from '@shared/Hooks/modal';
import fr from '@assets/icons/fr.svg';
import nitro from '@assets/icons/nitro.svg';
import plus from '@assets/icons/plus.svg';

interface IProps {}

/**
 * @author
 * @function @MeChannel
 **/

export const MeChannel: FC<IProps> = (props) => {
  const modal = useModal();
  const nav = useNavigate();
  const [friends, setFriends] = useState<any>([]);
  const { personalData } = useSelector((state: RootState) => {
    return state.channel;
  });
  const getMeData = async () => {
    const res = await mainApi.getAll('/personal/friends', { id: personalData._id });
    setFriends(res.data.data);
  };
  useEffect(() => {
    if (personalData) {
      getMeData();
    }
  }, [personalData]);
  const onOpenSearchModal = () => {
    modal.openModalConfirm('search', 'deo biet noi j', true);
  };
  const onClickDM = (id: string) => {
    nav(`/channels/@me/${id}`);
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
            <div className="list__dm">
              <BtnDiscord>
                <img alt="" src={fr} className="icon" /> Friends
              </BtnDiscord>
              <BtnDiscord>
                <img alt="" src={nitro} className="icon" /> Nitro
              </BtnDiscord>
              <div className="message_label">
                <span>Direct message</span>
                <img src={plus} alt="" title="Create DM" />
              </div>
              {friends.map((e: any) => {
                return (
                  <BtnDiscord
                    key={e.owner}
                    onClick={() => {
                      onClickDM(e.owner);
                    }}
                  >
                    <img alt="" src={fr} className="icon" /> Friends
                  </BtnDiscord>
                );
              })}
            </div>
          </div>
          <div className="personal_controller">controller</div>
        </div>
        <div className="main_func_wrapper__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
