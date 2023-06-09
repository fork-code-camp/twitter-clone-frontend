import React from 'react';
import LoginForm from '../forms/LoginForm';
import Head from 'next/head';

const Login = () => {
  return (
    <>
      <Head>
        <title>Log In</title>
        <meta name="description" content="Sign Up Twitter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginForm />
    </>
  );
};

export default Login;
