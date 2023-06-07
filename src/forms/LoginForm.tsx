import React from 'react'
import { FC } from 'react';
import LoginPageTemplate from '../forms/templates/LogInPageTemplate'
import { IAuthLoginRequest } from '@/services/types';

interface ILoginForm {
  onSumbit: (data: IAuthLoginRequest) => void;
}

const LoginForm: FC<ILoginForm> = ({onSumbit}) => {
  return (
    <LoginPageTemplate onSumbit={onSumbit}/>
  )
}

export default LoginForm