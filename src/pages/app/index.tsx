import React, { useEffect, useState } from 'react';

import { mainApi } from '../../axios/mainApi';

function AppContainer() {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeout, setFadeout] = useState<boolean>(false);
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

  return (
    <div className="homepage">
      {loading && (
        <div className={`loading__wrapper ${fadeout && 'fadeOut'}`}>
          <div className="loading_video">
            <video width={220} height={220} autoPlay loop>
              <source src="/assets/images/app/loadingdiscord.mp4" type="video/mp4" />
              <source src="/assets/images/app/loadingdiscord.webm" type="video/webm" />
              <img src="/assets/images/app/wumpushalone.svg" alt="" />
            </video>
            <div className="tip">
              <h4 className="tip_title">Have you know that?</h4>
              <p className="tip_des">
                Once upon a time, Discord started out as a simple browser application.
              </p>
            </div>
          </div>
          <div className="loading_footer">
            <p className="connection_error_tip">Having connection problems? Let us know that!</p>
          </div>
        </div>
      )}
      <div className="layout">
        <div className="layout">layout</div>
      </div>
    </div>
  );
}

export default AppContainer;
