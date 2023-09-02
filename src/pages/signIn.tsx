import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import SignInForm from '../forms/SignInForm';

const Login = () => {
  return (
    <>
      <DefaultSeo title="Login" {...SEO} />
      <SignInForm />
    </>
  );
};

export default Login;
