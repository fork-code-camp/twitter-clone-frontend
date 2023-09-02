import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { Container } from '@mui/material';
import SignUpForm from '@/forms/SignUpForm';

const Home = () => {
  return (
    <>
      <DefaultSeo title="SignUp" {...SEO} />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '100vh',
        }}
      >
        <SignUpForm />
      </Container>
    </>
  );
};

export default Home;
