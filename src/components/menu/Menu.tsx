import React, { FC, ReactNode } from 'react';
import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';
import MenuContainer from './MenuContainer';

interface IMenu {
  title: string;
  icon: ReactNode;
}

interface IMenuArray {
  menuList: IMenu[];
}

const onClick = () => {
  console.log('click');
};

const Menu: FC<IMenuArray> = ({ menuList }) => {
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
            {menuList.map((navItem) => (
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
            {menuList.map((navItem) => (
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
