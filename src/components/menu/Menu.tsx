import React, { FC, ReactNode } from 'react';
import { AppBar, Container, Toolbar, useTheme } from '@mui/material';
import MenuElem from './MenuElem';

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
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
        >
          {menuList.map((navItem) => (
            <MenuElem
              key={navItem.title}
              navItem={navItem}
              isActiveItem={activeItem === navItem.title}
              url={navItem.url}
            />
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Menu;
