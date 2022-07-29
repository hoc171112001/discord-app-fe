import { Button, TextField } from '@mui/material';
import React, { FC } from 'react';
import { AuthBox } from '../../../shared/authBox/authBox';

interface IProps {}

/**
 * @author
 * @function  ResetPassword
 **/

export const ResetPassword: FC<IProps> = (props) => {
  return (
    <AuthBox
      body={
        <div className="form_register">
          <div className="heading-formreset">
            <img src="/assets/images/login/reset.svg" alt="" />
            <h1 className="heading">Change your password</h1>
          </div>
          ` `
          <div className="form_body">
            <div className="form_control">
              <label htmlFor="fullWidth" className="label_textfield">
                new password
              </label>
              <TextField size="small" id="fullWidth" className="text_full" type="password" />
            </div>
            <div className="form_control">
              <Button variant="contained" fullWidth className="button-primary">
                Change Password
              </Button>
            </div>
          </div>
        </div>
      }
    />
  );
};
