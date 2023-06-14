import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import LogoutView from '@/views/logout/LogoutView';
import { Container } from '@mui/material';

const Logout = () => {
  return (
    <>
      <DefaultSeo title="Welcome in to Twitter" {...SEO} />
      <Container>
        <LogoutView />
      </Container>
    </>
  );
};

export default Logout;
