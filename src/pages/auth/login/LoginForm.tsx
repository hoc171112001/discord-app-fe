import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Box, Grid, TextField } from '@mui/material';
import classnames from 'classnames';
import { QRCodeCanvas } from 'qrcode.react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { setCookieRefreshToken, setTokenToCookie } from '../../../axios/cookie';
import authApi from '../../../axios/login';
import { mainApi } from '../../../axios/mainApi';
import { FORGOT_PASSWORD_URL } from '../../../constants';
import { changeAuthState } from '../../../redux/authSlice';
import { useModal } from '../../../shared/Hooks/modal';

LoginForm.propTypes = {};

const LoginSchema = yup.object().shape({
  email: yup.string().min(6, 'User khong duoc ngan hon 6 ky tu. Ok??').required(),
  password: yup.string().min(6, 'Password ngan hon 6 ky tu la the lao??').required(),
});

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modal = useModal();
  const [hasErrorForgotPassword, sethasErrorForgotPassword] = useState<boolean>(false);
  const [hasErrorLogin, setHasErrorLogin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: { email: '', password: '' },
  });

  const handleSubmitForm = async (values: any) => {
    setIsLoading(true);
    try {
      const { data }: any = await authApi.login(values);
      // save user info to local storage
      setTokenToCookie(data.accessToken);
      setCookieRefreshToken(data.refToken);

      setHasErrorLogin(false);
      // change auth state
      dispatch(changeAuthState(true));
      setIsLoading(false);
      navigate('/channels/@me');
    } catch (error) {
      setIsLoading(false);
      setHasErrorLogin(true);
      dispatch(changeAuthState(false));
    }
  };

  const onClickForgotPassword = async () => {
    try {
      if (control._formValues?.email) {
        const data = await mainApi.postData(FORGOT_PASSWORD_URL, {
          user_email: control._formValues.email,
        });
        modal.openModalConfirm('Instructions sent!', data.data, true, 'Accept');
        sethasErrorForgotPassword(false);
      } else {
        sethasErrorForgotPassword(true);
      }
    } catch (err: any) {
      modal.openModalConfirm('Failed occurred', err.response.data.message, true, 'Accept');
    }
  };

  return (
    <Grid container zIndex={100} className="loginForm">
      <Grid item xs={7}>
        <h3 className="heading font-large">Welcome back!</h3>
        <p className="description">We're so excited to see you again!</p>
        <form action="" className="form" onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="form_control">
            <label
              className={classnames(
                { has_error: hasErrorLogin || hasErrorForgotPassword },
                'label_textfield',
              )}
            >
              Enter your email{' '}
              {hasErrorLogin && <span className="error">- login or password invalid.</span>}
              {hasErrorForgotPassword && <span className="error">- This field is mandatory</span>}
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    variant="outlined"
                    fullWidth
                    size="small"
                    className="text_full"
                  />
                );
              }}
            />
          </div>
          <div className="form_control">
            <label title="" className={classnames({ has_error: hasErrorLogin }, 'label_textfield')}>
              Password{' '}
              {hasErrorLogin && <span className="error">- login or password invalid.</span>}
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
                    className="password text_full"
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
          <LoadingButton
            loading={isLoading}
            loadingIndicator="Loading..."
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginTop: 2, textTransform: 'uppercase' }}
            className="button-primary"
          >
            Login
          </LoadingButton>
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
