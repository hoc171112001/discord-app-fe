import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, Route, Routes } from 'react-router-dom';
import PrivatedComponent from './components/layouts/PrivatedComponent';
import AuthPrivate from './pages/auth';
import LoginPage from './pages/auth/login';
import { RegisterPage } from './pages/auth/register';
import HomePage from './pages/homepage';

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
  return (
    <ThemeProvider theme={darkTheme}>
      <PrivatedComponent isAuth={false} path="/">
        <Route path="homepage" element={<HomePage />} />
      </PrivatedComponent>
      {/* <Routes>
        <Route
          path="/"
          element={
            <div>
              homepage here <Outlet />
            </div>
          }
        >
          <Route path="homepage" element={<HomePage />} />
        </Route>
      </Routes> */}
      <Routes>
        <Route path="auth" element={<AuthPrivate />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
