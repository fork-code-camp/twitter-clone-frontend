import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import ForgotPasswordForm from '@/forms/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <>
      <DefaultSeo title="Sign Up Twitter" {...SEO} />
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPassword;
