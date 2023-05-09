import { IconButton, ListItemIcon } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface IMenuIcon {
  icon: ReactNode;
};

const MenuIcon: FC<IMenuIcon> = ({ icon }) => {
  return (
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
        {icon}
      </ListItemIcon>
    </IconButton>
  );
};

export default MenuIcon;
