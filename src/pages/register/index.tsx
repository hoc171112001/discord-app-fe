import React, { FC, useEffect } from 'react';
import { AuthBox } from '../../shared/authBox/authBox';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Link from '@mui/material/Link';
interface IProps {}

/**
 * @author
 * @function @RegisterPage
 **/

export const RegisterPage: FC<IProps> = (props) => {
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

  return (
    <div className="register_wrapper">
      <AuthBox
        header={
          <div className="form_header">
            <div className="back__button">
              <KeyboardArrowLeftIcon />
              <span>Back</span>
            </div>
          </div>
        }
        body={
          <div className="form_register">
            <h1 className="heading">Create an account</h1>
            <div className="form_body">
              <div className="form_control">
                <label htmlFor="fullWidth" className="label_textfield">
                  EMAIL
                </label>
                <TextField size="small" id="fullWidth" className="text_full" type="email" />
              </div>
              <div className="form_control">
                <label htmlFor="fullWidth" className="label_textfield">
                  User name
                </label>
                <TextField size="small" id="fullWidth" className="text_full" type="text" />
              </div>
              <div className="form_control">
                <label htmlFor="fullWidth" className="label_textfield">
                  password
                </label>
                <TextField size="small" id="fullWidth" className="text_full" type="password" />
              </div>
              <div className="form_control">
                <label htmlFor="fullWidth" className="label_textfield">
                  date of birth
                </label>
                <div className="date_birth">
                  <div className="date_birth--item">
                    <FormControl fullWidth className="form-age" size="small">
                      <InputLabel id="demo-select-small">Date</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Date"
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
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 150,
                            },
                          },
                        }}
                      >
                        {fromToNumber(1870, 2019)}
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
                      <span style={{ fontSize: '12px', lineHeight: '12px' }}>
                        (Optional) Accept emails with Discord updates, tips, and special offers
                      </span>
                    }
                  />
                </FormGroup>
              </div>
              <div className="form_control">
                <Button variant="contained" fullWidth className="button-primary">
                  Continue
                </Button>
              </div>
              <div className="form_control accept-notify-email">
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  Have an account?
                </Link>
              </div>
              <div className="form_control">
                <p className="privacy">
                  By clicking the subscribe button, you agree to <a href="">Terms of Service</a>
                  <span> and </span>
                  <a href="">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
