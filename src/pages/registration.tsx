import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { Container } from '@mui/material';
import RegistrationForm from '@/forms/RegistrationForm';

const Home = () => {
  return (
    <>
      <DefaultSeo title="Registration" {...SEO} />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '100vh',
        }}
      >
        <RegistrationForm />
      </Container>
    </>
  );
};

export default Home;
