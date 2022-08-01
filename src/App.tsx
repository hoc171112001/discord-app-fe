import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getTokenFromCookie } from './axios/Cookie';
import ProtectedComponent from './components/layouts/ProtectedComponent';
import AuthPrivate from './pages/auth';
import LoginPage from './pages/auth/login';
import { RegisterPage } from './pages/auth/register';
import { ResetPassword } from './pages/auth/reset';
import HomePage from './pages/homepage';
import { changeAuthState } from './redux/authSlice';
import { RootState } from './redux/store';
import { ModalConfirm } from './shared/modalConfirm';
import { isValidToken } from './utils';

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
  const { visible, description, title, onClick } = useSelector((state: RootState) => state.modal);

  dispatch(changeAuthState(isValidToken(getTokenFromCookie())));

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="auth" element={<AuthPrivate />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="reset" element={<ResetPassword />} />
        </Route>
        <Route element={<ProtectedComponent />}>
          <Route path="/homepage" element={<HomePage />} />
        </Route>
      </Routes>
      <ModalConfirm
        visible={visible}
        title={title}
        description={description}
        onClickAccept={onClick}
      />
    </ThemeProvider>
  );
}

export default App;
