import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import LoginForm from '../forms/LoginForm';

const Login = () => {
  return (
    <>
      <DefaultSeo title="Login" {...SEO} />
      <LoginForm />
    </>
  );
};

export default Login;
