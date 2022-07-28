import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import { RegisterPage } from './pages/register';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ForgotPassword from './pages/forgotPassword';

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </ThemeProvider>
  );
}
