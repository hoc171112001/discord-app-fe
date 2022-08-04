import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axiosClient from '../../axios';
import { mainApi } from '../../axios/mainApi';

HomePage.propTypes = {};

function HomePage() {
  useEffect(() => {
    mainApi
      .getAll('/auth/test', {})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div className="homepage">this is home page</div>;
}

export default HomePage;
