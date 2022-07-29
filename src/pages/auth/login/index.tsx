import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import LoginForm from './LoginForm';

index.propTypes = {
  string: PropTypes.string,
};

function index() {
  return (
    <Box className="login">
      <LoginForm />
    </Box>
  );
}

export default index;
