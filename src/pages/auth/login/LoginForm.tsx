import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Box, Button, Grid, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { QRCodeCanvas } from 'qrcode.react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../../axios/login';
import { useEffect } from 'react';
import queryString from 'query-string';
import { mainApi } from '../../../axios/mainApi';
import { FORGOT_PASSWORD_URL } from '../../../constants';
import { useDispatch } from 'react-redux';
import { openModal, registryConfirm } from '../../../redux/modalSlice';

LoginForm.propTypes = {};

const LoginSchema = yup.object().shape({
  username: yup.string().min(6, 'User khong duoc ngan hon 6 ky tu. Ok??').required(),
  password: yup.string().min(6, 'Password ngan hon 6 ky tu la the lao??').required(),
});

function LoginForm() {
  const navi = useNavigate();
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
    try {
      const result = await authApi.login(values);
      console.log('result :', result);
    } catch (error) {
      console.log('error :', error);
    }
  };

  const onClickForgotPassword = async () => {
    try {
      const data = await mainApi.postData(FORGOT_PASSWORD_URL, {
        username: control._formValues.username,
      });
      console.log('data :', data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log('fkjhas');
    if (control._formValues.username)
      navi({ search: queryString.stringify({ username: control._formValues.username }) });
  }, [control._formValues]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(openModal({ description: 'asdkjagdja', title: 'kljhfjshdk' }));
  // }, []);

  return (
    <Grid container zIndex={100} className="loginForm">
      <Grid item xs={7}>
        <h3 className="heading font-large">Welcome back!</h3>
        <p className="description">We're so excited to see you again!</p>
        <form action="" className="form" onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="form_control">
            <label title="" className="label_textfield">
              Enter your email or number
            </label>
            <Controller
              name="username"
              control={control}
              render={({ field }) => {
                return <TextField {...field} variant="outlined" fullWidth size="small" />;
              }}
            />
          </div>
          <div className="form_control">
            <label title="" className="label_textfield">
              Password
            </label>
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
                    size="small"
                  />
                );
              }}
            />
          </div>
          {/* {errors?.password && <p className="error">{errors.password?.message}</p>} */}
          <div className="auth-link font-small mt-8" onClick={onClickForgotPassword}>
            Forgot password?
          </div>
          <Button type="submit" fullWidth variant="contained" sx={{ marginTop: 2 }}>
            Login
          </Button>
        </form>

        <Box sx={{ marginTop: 2 }}>
          <span className="font-small">Need an account ? </span>
          <Link className="register auth-link font-small" to="/auth/register">
            Register
          </Link>
        </Box>
      </Grid>
      <Grid item xs={5} className="flex-col-center" style={{ paddingLeft: '3rem' }}>
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

        <Box className="text-center login-qr-info font-small">
          Scan this with the <strong>Discord mobile app</strong> to log in instantly.
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
