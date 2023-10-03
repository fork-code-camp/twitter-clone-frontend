import React from 'react';
import { IconButton, ListItemIcon } from '@mui/material';
import {configWidgets} from '@/components/inner/templates/widgetBar/ConfigWidgets';

const InnerWidgetsTemplate = () => {

  const onClick = (itemId: number) => {
    console.log('InnerWidgetsTemplate: id ' + itemId);
  };

  return (
    <ListItemIcon
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
        maxWidth: { xs: '100px', sm: '100%' },
      }}
    >
      {configWidgets.map((item) => {
        return (
          <IconButton
            key={item.id}
            sx={{ m: 0, p: 0, fill: "rgb(29, 161, 242)" }}
            onClick={() => onClick(item.id)}
          >
            {item.icon}
          </IconButton>
        );
      })}
    </ListItemIcon>
  );
};

export default InnerWidgetsTemplate;
