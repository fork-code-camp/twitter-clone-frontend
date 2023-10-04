import React, { FC } from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import SignUpForm from '../forms/SignUpForm';

const SignUp: FC = () => {
  return (
    <>
      <DefaultSeo title="Sign Up Twitter" {...SEO} />
      <main>
        <SignUpForm />
      </main>
    </>
  );
};

export default SignUp;