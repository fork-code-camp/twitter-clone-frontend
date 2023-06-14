import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import HomeView from '@/views/home/HomeView';
import { statusIsAuth } from '@/api';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';

const Home = () => {
  const { push } = useRouter();

  useEffect(() => {
    !statusIsAuth && push('/logout');
  }, [push]);

  return (
    <>
      <DefaultSeo title="Home" {...SEO} />
      <Container>
        <HomeView />
      </Container>
    </>
  );
};

export default Home;
