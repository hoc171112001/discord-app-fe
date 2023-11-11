import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { AuthBox } from '@shared/authBox/authBox';

index.propTypes = {
  string: PropTypes.string,
};

function index() {
  return <AuthBox width="784px" body={<LoginForm />}></AuthBox>;
}

export default index;
