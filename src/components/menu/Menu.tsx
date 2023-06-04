import * as React from 'react';
import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';
import configMenu from '@/data/configMenu/configMenu';
import MenuContainer from './MenuContainer';

const onClick = () => {
  console.log('click');
};

const Menu = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="relative"
      sx={{
        width: 'auto',
        background: theme.palette.primary.light,
        boxShadow: 'none',
      }}
    >
      <Container disableGutters sx={{ display: 'flex' }}>
        <Toolbar
          disableGutters
          sx={{ display: 'flex', alignItems: { xs: 'center', md: 'start' } }}
        >
          {/* small-screen */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
            }}
          >
            {configMenu.map((navItem) => (
              <MenuContainer
                key={navItem.title}
                navItem={navItem}
                onClick={onClick}
              />
            ))}
          </Box>
          {/* large-screen */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: { xs: 'none', md: 'column' },
              alignItems: 'start',
            }}
          >
            {configMenu.map((navItem) => (
              <MenuContainer
                key={navItem.title}
                navItem={navItem}
                onClick={onClick}
              />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Menu;
