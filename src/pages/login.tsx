import React from 'react';
import LoginForm from '../forms/LoginForm';
import { authAuthenticate } from '@/services/authService';

interface IAuthAuthenticate {
  email: string;
  password: string;
}

const Login = () => {
  const onSumbit = async (data: IAuthAuthenticate) => {
    authAuthenticate(data);
  };

  return (
    <main>
      <LoginForm onSumbit={onSumbit} />
    </main>
  );
};

export default Login;
