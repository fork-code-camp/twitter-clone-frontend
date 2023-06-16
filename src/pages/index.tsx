import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { Button, Container, Link, useTheme } from '@mui/material';
import { useLogoutQuery } from '@/services/Query/authorization/authorization.query';
const Home = () => {
  const { refetch: logout } = useLogoutQuery();

  const theme = useTheme();
  const btnTheme = {
    fontFamily: theme.typography.button.fontFamily,
    fontStyle: theme.typography.button.fontStyle,
    fontWeight: theme.typography.button.fontWeight,
    fontSize: theme.typography.button.fontSize,
    lineHeight: theme.typography.button.lineHeight,
    color: theme.typography.button.color,
  };
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
        <Button
          component={Link}
          href="/registration"
          variant="contained"
          sx={btnTheme}
        >
          Registration
        </Button>

        <Button component={Link} href="/home" variant="contained" sx={btnTheme}>
          Home page
        </Button>

        <Button
          component={Link}
          href="/login"
          variant="contained"
          sx={btnTheme}
        >
          Login
        </Button>

        <Button onClick={() => logout()} variant="contained" sx={btnTheme}>
          Logout
        </Button>
      </Container>
    </>
  );
};

export default Home;
