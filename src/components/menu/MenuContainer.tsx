import { Container } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import MenuIcon from './MenuIcon';
import MenuTitle from './MenuTitle';

type IMenuContainer = {
  navItem: {
    title: string;
    icon: ReactNode;
  };
  onClick: () => void;
};

const MenuContainer: FC<IMenuContainer> = ({ navItem, onClick }) => {
  return (
    <Container
      disableGutters
      key={navItem.title}
      onClick={onClick}
      sx={{
        display: { xs: 'flex', md: 'flex' },
        flexDirection: { xs: 'none', md: 'row' },
        justifyContent: 'start',
        px: 1.5,
        my: 1.5,
      }}
    >
      <MenuIcon icon={navItem.icon} />
      <MenuTitle title={navItem.title} />
    </Container>
  );
};

export default MenuContainer;
