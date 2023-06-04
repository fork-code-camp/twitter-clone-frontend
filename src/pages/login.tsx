//PR: add log in layout #18

//import LogInPageForm from '@/forms/LogInPageForm'
//const login = () => {
//  return <LogInPageForm />
//}
//export default login

import React from 'react';
import { useMutation } from 'react-query';
import LoginForm from '../forms/LoginForm';
import { loginFn } from '@/services/authService';
import { IAuthLoginRequest } from '@/services/types';
import { useRouter } from 'next/router';

const Login = () => {
  const { push } = useRouter();
  const onSumbit = async (data: IAuthLoginRequest) => {
    mutateLogin(data);
  };

  const { mutate: mutateLogin } = useMutation(
    (loginData: IAuthLoginRequest) => loginFn(loginData),
    {
      onSuccess(data) {
        console.log('логин успешен', data);
        push('/home');
      },
      onError(error) {
        console.log('логин ошибка', error);
      },
    }
  );

  return (
    <main>
      <LoginForm onSumbit={onSumbit} />
    </main>
  );
};

export default Login;
