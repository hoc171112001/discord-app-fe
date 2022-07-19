import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Box, Button, Grid, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { QRCodeCanvas } from 'qrcode.react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import authApi from '../../axios/login';

LoginForm.propTypes = {};

const LoginSchema = yup.object().shape({
  username: yup.string().min(6, 'User khong duoc ngan hon 6 ky tu. Ok??').required(),
  password: yup.string().min(6, 'Password ngan hon 6 ky tu la the lao??').required(),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: { username: '', password: '' },
  });

  const handleSubmitForm = async (values: any) => {
    console.log('values :', values);
    // const result = await authApi.login(values);
  };

  return (
    <Grid container zIndex={100} spacing={2} className="loginForm" sx={{ padding: '2rem' }}>
      <Grid item xs={8}>
        <Button variant="text" color="inherit" startIcon={<KeyboardArrowLeftIcon />}>
          Go back
        </Button>
        <h3 className="heading">Welcome back!</h3>
        <p className="description">We're so excited to see you again!</p>
        <form action="" className="form" onSubmit={handleSubmit(handleSubmitForm)}>
          <label title="">Enter your email or number</label>
          <Controller
            name="username"
            control={control}
            render={({ field }) => {
              return <TextField {...field} variant="outlined" fullWidth />;
            }}
          />
          <label title="">Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  type="password"
                  variant="outlined"
                  fullWidth
                  className="password"
                />
              );
            }}
          />
          {errors?.password && <p className="error">{errors.password?.message}</p>}
          <Link to="/forgotpassword" className="forgotPass auth-link">
            Forgot password
          </Link>
          <Button type="submit" fullWidth variant="contained" sx={{ marginTop: 2 }}>
            Login
          </Button>
        </form>

        <Box sx={{ marginTop: 2 }}>
          <span>Need an account </span>
          <Link className="register auth-link" to="/register">
            Register
          </Link>
        </Box>
      </Grid>
      <Grid item xs={4} className="flex-col-center">
        <Box className="flex-center" component="div" sx={{ width: '100%', position: 'relative' }}>
          <QRCodeCanvas
            value="https://discord.com/downloadddddddddddd"
            size={180}
            bgColor="#fff"
            style={{ border: '8px solid #fff', borderRadius: '0.5rem', position: 'relative' }}
            level="H"
          ></QRCodeCanvas>
          <img
            src="/assets/images/login/logo.png"
            alt="logo discord"
            className="login-logo"
            width={50}
          />
        </Box>

        <Box className="text-center login-qr-heading" component="h3">
          Log in with QR Code
        </Box>

        <Box className="text-center login-qr-info">
          Scan this with the <strong>Discord mobile app</strong> to log in instantly.
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
