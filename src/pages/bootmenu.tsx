/*
  временная страница с кнопками на все страницы
  для использования переименовать:
  pages/index.tsx --> pages/home.tsx
  pages/bootmenu.tsx --> pages/index.tsx
*/

import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { Button, Container, Link, Box, useTheme } from '@mui/material';
import { useLogoutQuery } from '@/query/authorization/authorization.query';
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
          gap: 1,
          p: 1,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button
            component={Link}
            href="/signUp"
            variant="contained"
            sx={btnTheme}
          >
            SignUp page
          </Button>
          <Button
            component={Link}
            href="/signIn"
            variant="contained"
            sx={btnTheme}
          >
            Login page
          </Button>
          <Button
            component={Link}
            href="/logout"
            variant="contained"
            sx={btnTheme}
          >
            Logout(View) page
          </Button>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button
            component={Link}
            href="/home"
            variant="contained"
            sx={btnTheme}
          >
            Home page
          </Button>
          <Button
            component={Link}
            href="/explore"
            variant="contained"
            sx={btnTheme}
          >
            Explore page
          </Button>
          <Button
            component={Link}
            href="/profile"
            variant="contained"
            sx={btnTheme}
          >
            Profile page
          </Button>
          <Button
            component={Link}
            href="/404"
            variant="contained"
            sx={btnTheme}
          >
            404 page
          </Button>
        </Box>

        <Button onClick={() => logout()} variant="contained" sx={btnTheme}>
          Logout Auth
        </Button>
      </Container>
    </>
  );
};

export default Home;
