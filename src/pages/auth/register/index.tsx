import React, { FC, useState } from 'react';
import { AuthBox } from '../../../shared/authBox/authBox';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Link from '@mui/material/Link';
import classnames from 'classnames';
import { mainApi } from '../../../axios/mainApi';
import { REGISTER_URL } from '../../../constants';
import { convertDate } from '../../../utils';
interface IProps {}

/**
 * @author
 * @function @RegisterPage
 **/

export const RegisterPage: FC<IProps> = (props) => {
  const [year, setYear] = useState<any>('');
  const [month, setMonth] = useState<any>('');
  const [date, setDate] = useState<any>('');
  const [username, setUsername] = useState('');
  const [hasErrEmail, setHasErrEmail] = useState('');
  const [hasErrUser, setHasErrUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState<boolean>(false);
  const navigate = useNavigate();
  const fromToNumber = (from: number, to: number) => {
    const arr = [];
    for (let i = from; i <= to; i++) {
      arr.push(
        <MenuItem value={i} key={i}>
          {i}
        </MenuItem>,
      );
    }
    return arr;
  };
  const changeYear = (e: any) => {
    setYear(e.target.value);
  };
  const changeMonth = (e: any) => {
    setMonth(e.target.value);
  };
  const changeDate = (e: any) => {
    setDate(e.target.value);
  };
  const changeUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const changeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const changePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const onSubmitRegister = async () => {
    if (!date || !month || !year || !email || !password || !username) {
      setHasError(true);
    } else {
      setHasError(false);
      try {
        const res = await mainApi.postData(REGISTER_URL, {
          birth: convertDate(year, month, date),
          username: username,
          password: password,
          email: email,
        });
        if (res.data.status == 'success') {
          navigate('/auth/login');
        }
      } catch (err: any) {
        if (err.data?.keyValue?.email) {
          setHasErrEmail('Duplicated Email');
          setHasErrUser('');

          return;
        }
        if (err.data?.keyValue?.username) {
          setHasErrUser('Duplicated Username');
          setHasErrEmail('');

          return;
        }
        setHasErrUser('');
        setHasErrEmail('');
      }
    }
  };

  return (
    <AuthBox
      body={
        <div className="form_register">
          <h1 className="heading">Create an account</h1>
          <div className="form_body">
            <div className="form_control">
              <label
                htmlFor="fullWidth"
                className={classnames({ has_error: hasError || hasErrEmail }, 'label_textfield')}
              >
                EMAIL
                {hasError && <span className="error"> - This field is mandatory</span>}
                {hasErrEmail && <span className="error"> - {hasErrEmail}</span>}
              </label>
              <TextField
                size="small"
                id="fullWidth"
                className="text_full"
                type="email"
                value={email}
                onChange={changeEmail}
              />
            </div>
            <div className="form_control">
              <label
                htmlFor="fullWidth"
                className={classnames({ has_error: hasError || hasErrUser }, 'label_textfield')}
              >
                User name
                {hasError && <span className="error"> - This field is mandatory</span>}
                {hasErrUser && <span className="error"> - {hasErrUser}</span>}
              </label>
              <TextField
                size="small"
                id="fullWidth"
                className="text_full"
                type="text"
                value={username}
                onChange={changeUsername}
              />
            </div>
            <div className="form_control">
              <label
                htmlFor="fullWidth"
                className={classnames({ has_error: hasError }, 'label_textfield')}
              >
                password
                {hasError && <span className="error"> - This field is mandatory</span>}
              </label>
              <TextField
                size="small"
                id="fullWidth"
                className="text_full"
                type="password"
                value={password}
                onChange={changePassword}
              />
            </div>
            <div className="form_control">
              <label
                htmlFor="fullWidth"
                className={classnames({ has_error: hasError }, 'label_textfield')}
              >
                date of birth
                {hasError && <span className="error"> - This field is mandatory</span>}
              </label>
              <div className="date_birth">
                <div className="date_birth--item">
                  <FormControl fullWidth className="form-age" size="small">
                    <InputLabel id="demo-select-small">Date</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      label="Date"
                      value={date}
                      onChange={changeDate}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 150,
                          },
                        },
                      }}
                    >
                      {fromToNumber(1, 31)}
                    </Select>
                  </FormControl>
                </div>
                <div className="date_birth--item">
                  <FormControl fullWidth className="form-age" size="small">
                    <InputLabel id="demo-select-small">Month</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      label="Month"
                      value={month}
                      onChange={changeMonth}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 150,
                          },
                        },
                      }}
                    >
                      {fromToNumber(1, 12)}
                    </Select>
                  </FormControl>
                </div>
                <div className="date_birth--item">
                  <FormControl fullWidth className="form-age" size="small">
                    <InputLabel id="demo-select-small">Year</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      label="Year"
                      onChange={changeYear}
                      value={year}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 150,
                          },
                        },
                      }}
                    >
                      {fromToNumber(1920, 2009)}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="form_control accept-notify-email">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  className="notify_check"
                  label={
                    <span
                      style={{ fontSize: '12px', lineHeight: '12px', textTransform: 'capitalize' }}
                    >
                      (Optional) Accept emails with Discord updates, tips, and special offers
                    </span>
                  }
                />
              </FormGroup>
            </div>
            <div className="form_control">
              <Button
                variant="contained"
                fullWidth
                className="button-primary"
                onClick={onSubmitRegister}
              >
                Continue
              </Button>
            </div>
            <div className="form_control accept-notify-email">
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  navigate('/auth/login');
                }}
              >
                Have an account?
              </Link>
            </div>
            <div className="form_control">
              <p className="privacy">
                By clicking the subscribe button, you agree to <a href="!#">Terms of Service</a>
                <span> and </span>
                <a href="!#">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
};
