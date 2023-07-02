import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import LoginPageTemplate from '../forms/templates/LogInPageTemplate';
import { useLoginMutation } from '@/query/authorization/authorization.mutation';
import { IAuthLoginRequest } from '@/services/types';
import { ErrorResponse } from './types';

const LoginForm: FC = () => {
  const { push } = useRouter();

  const {
    register: loginRegisterForm,
    handleSubmit: loginhandleSubmitForm,
    reset: loginResetForm,
  } = useForm<IAuthLoginRequest>();

  const {
    mutateAsync: mutateLogin,
    isSuccess: loginIsSuccess,
    isError: isErrorLogin,
    error: errorMessage,
  } = useLoginMutation();

  const messageOnError = (errorMessage as ErrorResponse)?.response.data.message;

  const customHandleSubmit = (data: IAuthLoginRequest) => {
    mutateLogin(data);
    loginResetForm();
  };

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    loginhandleSubmitForm(customHandleSubmit)();
  };

  loginIsSuccess && push('/home');

  return (
    <LoginPageTemplate
      loginRegisterForm={loginRegisterForm}
      onSubmitForm={onSubmitForm}
      isErrorLogin={isErrorLogin}
      errorMessage={messageOnError}
    />
  );
};

export default LoginForm;
