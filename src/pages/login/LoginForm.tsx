import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

LoginForm.propTypes = {};

function LoginForm() {
  return (
    <Grid container zIndex={100} spacing={4} className="form" sx={{ padding: '2rem' }}>
      <Grid xs={8}>Alo</Grid>
      <Grid xs={4}>Loa</Grid>
    </Grid>
  );
}

export default LoginForm;
