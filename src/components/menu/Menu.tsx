import React, { FC, ReactNode } from 'react';
import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';
import MenuItem from './MenuItem';

interface IMenu {
  title: string;
  icon: ReactNode;
  url: string;
}

interface IMenuArray {
  menuList: IMenu[];
  activeItem: string;
}

const Menu: FC<IMenuArray> = ({ menuList, activeItem }) => {
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
              <MenuItem
                key={navItem.title}
                navItem={navItem}
                isActiveItem={activeItem === navItem.title}
                url={navItem.url}
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
              <MenuItem
                key={navItem.title}
                navItem={navItem}
                isActiveItem={activeItem === navItem.title}
                url={navItem.url}
              />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Menu;
