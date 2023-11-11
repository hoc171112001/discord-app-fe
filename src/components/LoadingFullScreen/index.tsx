import React from 'react';

import loadingMp4 from '@assets/images/app/loadingdiscord.mp4';
import loadingWebm from '@assets/images/app/loadingdiscord.webm';
import wunpusAlone from '@assets/images/app/wumpushalone.svg';

export default function LoadingFullScreen({ fadeout }: any) {
  return (
    <div className={`loading__wrapper ${fadeout && 'fadeOut'}`}>
      <div className="loading_video">
        <video width={220} height={220} autoPlay loop>
          <source src={loadingMp4} type="video/mp4" />
          <source src={loadingWebm} />
          <img src={wunpusAlone} alt="" />
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
  );
}
