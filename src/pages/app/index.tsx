import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { mainApi } from '../../axios/mainApi';
import LoadingFullScreen from '../../components/LoadingFullScreen';

function AppContainer() {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeout, setFadeout] = useState<boolean>(false);
  const [focusing, setFocusing] = useState<any>('home');
  useEffect(() => {
    let timeout: any;
    mainApi
      .getAll('/auth/test', {})
      .then((res) => {
        console.log(res);
        setFadeout(true);
        timeout = setTimeout(() => {
          setLoading(false);
        }, 300);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const nav = useNavigate();
  const onSelectServer = (data: any, idx: any) => {
    nav(`/channels/${data.id}`);
  };
  const listServer = [
    {
      id: '213418741dfsafcxvjh-sdfafgh',
      name: 'HH',
    },
    {
      id: '213418741dfsafcxvjh-ada',
      name: 'HB',
    },
    {
      id: '213418741dfsafcxvjh-sdfafasd',
      name: 'HC',
    },
  ];

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
                }}
              >
                <img src="/assets/images/app/logo.svg" alt="" style={{ marginRight: '1px' }} />
              </li>
              <li className="separator"></li>
              {listServer.map((e, idx) => (
                <li
                  className={`server_items server_items--nobg ${focusing == idx && 'focused'}`}
                  key={idx}
                  onClick={() => {
                    setFocusing(idx);
                    onSelectServer(e, idx);
                  }}
                >
                  {e.name}
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
        <div className="layout_main"></div>
      </div>
    </div>
  );
}

export default AppContainer;
