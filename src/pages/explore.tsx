import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import { check } from '../api/authCheck';
import ExploreView from '@/views/explore/ExploreView';

const Profile = () => {
  // const { push } = useRouter();

  // useEffect(() => {
  //   check().then((res) => !res && push('/logout'));
  // }, [push]);

  return (
    <>
      <DefaultSeo title="Explore" {...SEO} />
      <Container>
        <ExploreView />
      </Container>
    </>
  );
};

export default Profile;
