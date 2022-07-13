import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Box, Button, Grid, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

LoginForm.propTypes = {};

const LoginSchema = yup.object().shape({
  email: yup.string(),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });
  return (
    <Grid container zIndex={100} spacing={2} className="loginForm" sx={{ padding: '2rem' }}>
      <Grid xs={8}>
        <Button variant="text" color="inherit" startIcon={<KeyboardArrowLeftIcon />}>
          Go back
        </Button>
        <h3 className="heading">Welcome back!</h3>
        <p className="description">We're so excited to see you again!</p>
        <form action="" className="form">
          <Controller
            name="email"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  type="text"
                  variant="outlined"
                  label="Email or phone number"
                  color="info"
                  fullWidth
                />
              );
            }}
            defaultValue=""
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  type="password"
                  variant="outlined"
                  label="Password"
                  fullWidth
                  className="password"
                  sx={{ marginTop: 4 }}
                />
              );
            }}
            defaultValue=""
          />
          <Link to="/forgotpassword" className="forgotPass">
            Forgot password
          </Link>
          <Button type="submit" fullWidth variant="contained" sx={{ marginTop: 2 }}>
            Login
          </Button>
        </form>

        <Box sx={{ marginTop: 2 }}>
          <span>Need an account</span>
          <Link className="register" to="/register">
            Register
          </Link>
        </Box>
      </Grid>
      <Grid xs={4}>Loa</Grid>
    </Grid>
  );
}

export default LoginForm;
