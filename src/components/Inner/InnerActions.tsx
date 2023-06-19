import React from 'react';
import { IconButton, ListItemIcon, useTheme } from '@mui/material';
import ConfigActions from '@/data/configInner/configActions';

const InnerActions = () => {
  const theme = useTheme();
  const iconColor = theme.palette.buttonWidget?.contrastText || '#000000';
  const iconArray = ConfigActions({ iconColor });

  const onClick = (itemId: number) => {
    console.log('InnerActions: id ' + itemId);
  };

  return (
    <ListItemIcon
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '18px',
        maxWidth: { xs: '100px', md: '100%' },
      }}
    >
      {iconArray.map((item) => {
        return (
          <IconButton
            key={item.id}
            sx={{ m: 0, p: 0 }}
            onClick={() => onClick(item.id)}
          >
            {item.icon}
          </IconButton>
        );
      })}
    </ListItemIcon>
  );
};

export default InnerActions;
