import React, { FC, ReactNode } from 'react';
import { Box, Button, Typography } from '@mui/material';

interface IActionButton {
  icon: ReactNode;
  count: number;
  selected?: boolean;
  onClick: () => void;
}

const ActionButton: FC<IActionButton> = ({
  icon,
  count,
  selected,
  onClick,
}) => {
  const notSelectedColor = '#5B7083';
  const selectedColor = '#1DA1F2';
  const strokeColor = selected ? selectedColor : notSelectedColor;
  const toggleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.25,
    minWidth: '40px',
    p: 0,
    background: 'none!important',
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

export default ActionButton;
