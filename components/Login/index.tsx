import React, { FC } from 'react'
import { LoginQrCode } from './QRcode'
import { LoginInput } from './Form'

interface IProps { }

/**
* @author
* @function @LoginForm
**/

export const LoginForm: FC<IProps> = () => {
  return (
    <div className='flex items-center justify-between'>
      <LoginInput />
      <LoginQrCode />
    </div>
  )
}
