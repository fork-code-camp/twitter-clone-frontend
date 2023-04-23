import React from 'react';
import { IconButton, ListItemIcon } from '@mui/material';
import configInnerActions from '@/data/configInner/actionList/configInnerActions';

const onClick = (itemId: number) => {
  console.log('InnerActions: id ' + itemId);
};

const InnerActions = () => {
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
      {configInnerActions.map((item) => {
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
