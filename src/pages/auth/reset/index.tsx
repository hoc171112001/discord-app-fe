import { Button, TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { mainApi } from '../../../axios/mainApi';
import { RESET_PASSWORD_URL } from '../../../constants';
import { AuthBox } from '../../../shared/authBox/authBox';

interface IProps {}

/**
 * @author
 * @function  ResetPassword
 **/

export const ResetPassword: FC<IProps> = (props) => {
  const [newPass, setNewPass] = useState<string>('');
  const [sParams] = useSearchParams();
  const onPasswordChange = (event: any) => {
    setNewPass(event.target.value);
  };
  const onClickChangePass = async () => {
    console.log('location', sParams.get('token'));
    try {
      const data = await mainApi.postData(RESET_PASSWORD_URL, {
        token: sParams.get('token'),
        newPassword: newPass,
      });
      console.log('data :', data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthBox
      body={
        <div className="form_register">
          <div className="heading-formreset">
            <img src="/assets/images/login/reset.svg" alt="" />
            <h1 className="heading">Change your password</h1>
          </div>
          <div className="form_body">
            <div className="form_control">
              <label htmlFor="fullWidth" className="label_textfield">
                new password
              </label>
              <TextField
                size="small"
                id="fullWidth"
                className="text_full"
                type="password"
                onChange={onPasswordChange}
              />
            </div>
            <div className="form_control">
              <Button
                variant="contained"
                fullWidth
                className="button-primary"
                disabled={!(newPass.length > 3)}
                onClick={onClickChangePass}
              >
                Change Password
              </Button>
            </div>
          </div>
        </div>
      }
    />
  );
};
