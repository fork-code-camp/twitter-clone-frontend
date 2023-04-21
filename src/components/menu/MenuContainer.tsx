import { Container, IconButton, ListItemIcon, Button } from '@mui/material';
import React, { ReactNode } from 'react';

type IMenuContainer = {
  navItem: {
    title: string;
    icon: ReactNode;
  };
  onClick: () => void;
};
const MenuContainer = ({ navItem, onClick }: IMenuContainer) => {
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
      <IconButton
        sx={{
          my: 0,
          pl: 0,
        }}
        color="secondary"
      >
        <ListItemIcon
          sx={{
            minWidth: '40px',
          }}
        >
          {navItem.icon}
        </ListItemIcon>
      </IconButton>
      <Button
        sx={{
          mx: 0,
          p: 0,
          color: '#9f9f9f',
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'flex-start',
          gap: '20px 0',
          fontWeight: 700,
          fontSize: '19px',
        }}
      >
        {navItem.title}
      </Button>
    </Container>
  );
};

export default MenuContainer;
