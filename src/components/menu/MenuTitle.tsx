import { Button, useTheme } from '@mui/material';
import React, { FC } from 'react';

interface IMenuTitle {
  title: string;
}

const MenuTitle: FC<IMenuTitle> = ({ title }) => {
  const theme = useTheme();
  return (
    <Button
      sx={{
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
        justifyContent: 'flex-start',
        gap: '20px 0',
        mx: 0,
        p: 0,
        color: theme.typography.h3.color,
        fontFamily: theme.typography.h3.fontFamily,
        fontWeight: theme.typography.h3.fontWeight,
        fontSize: theme.typography.h3.fontSize,
      }}
    >
      {title}
    </Button>
  );
};

export default MenuTitle;
