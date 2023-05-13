import React, { FC, ReactNode } from 'react';
import { Box, Button, Typography } from '@mui/material';

interface IButtonWidget {
  icon: ReactNode;
  count: number;
  onClick: () => void;
}

const ButtonWidget: FC<IButtonWidget> = ({ icon, count, onClick }) => {
  const notSelectedColor = '#5B7083';
  const selectedColor = '#1DA1F2';
  const strokeColor = count > 0 ? selectedColor : notSelectedColor;
  const toggleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.25,
    minWidth: '40px',
    p: 0,
    border: 'none',
  };
  return (
    <Button onClick={onClick} sx={toggleStyles}>
      <Box sx={{ display: 'flex', stroke: strokeColor }}>{icon}</Box>
      <Typography
        variant="subtitle1"
        sx={{ color: notSelectedColor, lineHeight: 1.1 }}
      >
        {count}
      </Typography>
    </Button>
  );
};

export default ButtonWidget;
