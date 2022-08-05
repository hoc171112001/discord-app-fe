import React, { useEffect, useState } from 'react';

export default function LoadingFullScreen({ fadeout }: any) {
  return (
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
  );
}
