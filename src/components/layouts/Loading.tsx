import React from 'react';
import twitterlogo from '@assets/icons/twiiter.svg';
import serverStatus from '@assets/icons/server-status.svg';

function Loading() {
  return (
    <div className="discord__loading">
      <div className="logo">
        <video src={'/assets/discord-loading.mp4'} autoPlay></video>
      </div>
      <div className="description">
        <div className="">Did you know</div>
        <div className="">Make images accessible to everyone. Add a description on upload.</div>
        <div className=""></div>
      </div>
      <div className="footer">
        <span className="">Connection problems? Let us know!</span>
        <nav>
          <a href="#!">
            <img src={twitterlogo} alt="twitter logo" />
          </a>
          <a href="#!">
            <img src={serverStatus} alt="server status logo" />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Loading;
