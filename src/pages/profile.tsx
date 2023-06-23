import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import { check } from '../api/authCheck';
import ProfileView from '@/views/profile/ProfileView';

const Profile = () => {
  const { push } = useRouter();

  useEffect(() => {
    check().then((res) =>
      setTimeout(() => {
        !res && push('/logout');
      }, 1000)
    );
  }, [push]);

  return (
    <>
      <DefaultSeo title="Profile" {...SEO} />
      <Container>
        <ProfileView />
      </Container>
    </>
  );
};

export default Profile;
