import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import LoginPageTemplate from '../forms/templates/LogInPageTemplate';
import { useLoginMutation } from '@/services/Query/authorization/authorization.mutation';
import { IAuthLoginRequest } from '@/services/types';

const LoginForm: FC = () => {
  const { push } = useRouter();

  const {
    register: loginRegisterForm,
    handleSubmit: loginhandleSubmitForm,
    reset: loginResetForm,
  } = useForm<IAuthLoginRequest>();

  const { mutateAsync: mutateLogin, isSuccess: loginIsSuccess } =
    useLoginMutation();

  const customHandleSubmit = (data: IAuthLoginRequest) => {
    mutateLogin(data);
    loginResetForm();
  };

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    loginhandleSubmitForm(customHandleSubmit)();
    console.log(loginIsSuccess);
  };

  loginIsSuccess && push('/home');

  return (
    <LoginPageTemplate
      loginRegisterForm={loginRegisterForm}
      onSubmitForm={onSubmitForm}
    />
  );
};

export default LoginForm;
