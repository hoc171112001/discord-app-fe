import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { mainApi } from '../../axios/mainApi';
import LoadingFullScreen from '../../components/LoadingFullScreen';
import { getTokenFromCookie } from '../../axios/Cookie';
import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { setPersonal } from '../../redux/channelSlice';
const _ = require('lodash');

function AppContainer() {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeout, setFadeout] = useState<boolean>(false);
  const [focusing, setFocusing] = useState<any>('home');
  const [personalInfo, setPersonalInfo] = useState<any>(null);
  const cookieToken: any = getTokenFromCookie();
  const userInfo: any = jwt_decode(cookieToken);
  const userId: string = userInfo?.id;
  const serverList: any = _.get(personalInfo, 'personal.servers', []);
  const dispatch = useDispatch();
  useEffect(() => {
    let timeout: any;
    mainApi
      .getAll('/personal', { id: userId })
      .then((res) => {
        setPersonalInfo(res.data);
        dispatch(setPersonal(res.data?.personal));
        setFadeout(true);
        timeout = setTimeout(() => {
          setLoading(false);
        }, 200);
      })
      .catch((err) => {
        console.log(err);
        setFadeout(true);
        timeout = setTimeout(() => {
          setLoading(false);
        }, 200);
      });
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const nav = useNavigate();
  const onSelectServer = (data: any, idx: any) => {
    nav(`/channels/${data._id}`);
  };

  const renderNameAvatar = (name: string) => {
    if (!!name) {
      let nameData = name.split(' ');
      if (nameData.length > 1) {
        return nameData[0].slice(0, 1) + nameData[nameData.length - 1].slice(0, 1).toUpperCase();
      } else {
        return name.slice(0, 1).toUpperCase();
      }
    }
  };

  return (
    <div className="homepage">
      {loading && <LoadingFullScreen fadeout={fadeout} />}
      <div className="layout">
        <div className="aside">
          <div className="server_list">
            <ul>
              <li
                className={`server_items server_items--nobg personal-server ${
                  focusing == 'home' && 'focused'
                }`}
                onClick={() => {
                  setFocusing('home');
                  nav('/channels/@me');
                }}
              >
                <img src="/assets/images/app/logo.svg" alt="" style={{ marginRight: '1px' }} />
              </li>
              <li className="separator"></li>
              {serverList &&
                serverList?.map((e: any, idx: number) => (
                  <li
                    className={`server_items server_items--nobg ${focusing == idx && 'focused'}`}
                    key={idx}
                    onClick={() => {
                      setFocusing(idx);
                      onSelectServer(e, idx);
                    }}
                  >
                    {e.icon ? (
                      <div className="box-avt">
                        <img
                          src={e.icon}
                          alt=""
                          style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                        />
                      </div>
                    ) : (
                      <span>{renderNameAvatar(e.name)}</span>
                    )}
                  </li>
                ))}
              <li className="separator"></li>
              <li className="server_items server_items--button personal-server ">
                <img src="/assets/images/app/plus.svg" alt="" style={{ marginRight: '1px' }} />
              </li>
              <li className="server_items server_items--button personal-server ">
                <img src="/assets/images/app/comunity.svg" alt="" style={{ marginRight: '1px' }} />
              </li>
            </ul>
          </div>
        </div>
        <div className="layout_main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppContainer;
