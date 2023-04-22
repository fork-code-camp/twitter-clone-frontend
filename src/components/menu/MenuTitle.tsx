import { Button } from '@mui/material';
import React, { FC } from 'react';

type IMenuTitle = {
  title: string;
};

const MenuTitle: FC<IMenuTitle> = ({ title }) => {
  return (
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
      {title}
    </Button>
  );
};

export default MenuTitle;
