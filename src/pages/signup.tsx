import React, { FC } from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import SignUpPageForm from '@/forms/SignUpPageForm';

const SignUp: FC = () => {
  return (
    <>
      <DefaultSeo title="Sign Up Twitter" {...SEO} />
      <main>
        <SignUpPageForm />
      </main>
    </>
  );
};

export default SignUp;
