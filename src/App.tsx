import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getRefreshToken, getTokenFromCookie } from '@config/axios/cookie';
import ProtectedComponent from '@components/layouts/ProtectedComponent';
import AuthPrivate from '@pages/auth';
import LoginPage from '@pages/auth/login';
import { RegisterPage } from '@pages/auth/register';
import { ResetPassword } from '@pages/auth/reset';
import AppOverview from '@pages/app';
import { changeAuthState } from '@redux/authSlice';
import { RootState } from '@redux/store';
import { ModalConfirm } from '@shared/modalConfirm';
import { isValidToken } from '@utils/index';
import { MeChannel } from '@pages/app/channel/@me';
import { ServersChannel } from '@pages/app/channel/servers';
import { MeChannelMessage } from '@pages/app/channel/@me/MeChannelMessage';
import { MeChannelMain } from '@pages/app/channel/@me/MeChannelMain';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#ccc',
      secondary: '#333',
    },
  },
});

function App() {
  const dispatch = useDispatch();

  const { visible, description, title, acceptButton, acceptButtonLabel } = useSelector(
    (state: RootState) => state.modal,
  );

  // check authenticate
  dispatch(changeAuthState(isValidToken(getTokenFromCookie()) || isValidToken(getRefreshToken())));

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="auth" element={<AuthPrivate />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="reset" element={<ResetPassword />} />
        </Route>
        <Route element={<ProtectedComponent />}>
          <Route path="/" element={<AppOverview />}>
            <Route path="/channels/@me" element={<MeChannel />}>
              <Route path="/channels/@me" element={<MeChannelMain />} />
              <Route path="/channels/@me/:id" element={<MeChannelMessage />} />
            </Route>
            <Route path="/channels/:id" element={<ServersChannel />} />
          </Route>
        </Route>
      </Routes>
      <ModalConfirm
        visible={visible}
        title={title}
        description={description}
        acceptButton={acceptButton}
        acceptButtonLabel={acceptButtonLabel}
      />
    </ThemeProvider>
  );
}

export default App;
