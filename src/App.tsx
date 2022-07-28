import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/login';
import { RegisterPage } from './pages/auth/register';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AuthPrivate from './pages/auth';

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
      <Routes>
        <Route path="auth" element={<AuthPrivate />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
