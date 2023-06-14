import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { Button, Container, Link } from '@mui/material';
import { useLogoutQuery } from '@/services/Query/authorization/authorization.query';
const Home = () => {

  const { refetch: logout } = useLogoutQuery()

  return (
    <>
      <DefaultSeo title="Boot Menu" {...SEO} />
      <Container
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0 15px',
          p: '10px',
        }}
      >
        <Button component={Link} href="/registration" variant="contained">
          Registration
        </Button>

        <Button component={Link} href="/home" variant="contained">
          Home page
        </Button>

        <Button component={Link} href="/login" variant="contained">
          Login
        </Button>

        <Button onClick={()=>logout()} variant="contained">
          Logout
        </Button>
      </Container>
    </>
  );
};

export default Home;
