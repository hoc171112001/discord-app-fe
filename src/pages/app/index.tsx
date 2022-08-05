import React, { useEffect, useState } from 'react';

import { mainApi } from '../../axios/mainApi';
import LoadingFullScreen from '../../components/LoadingFullScreen';

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
      {loading && <LoadingFullScreen fadeout={fadeout} />}
      <div className="layout">
        <div className="layout">layout</div>
      </div>
    </div>
  );
}

export default AppContainer;
