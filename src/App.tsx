import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/login';
import { RegisterPage } from './pages/auth/register';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AuthPrivate from './pages/auth';
import { ResetPassword } from './pages/auth/reset';
import { ModalConfirm } from './shared/modalConfirm';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#ccc',
      secondary: '#333',
    },
  },
});
export default function App() {
  const { visible, description, title, onClick } = useSelector((state: RootState) => state.modal);

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="auth" element={<AuthPrivate />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="reset" element={<ResetPassword />} />
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
