import React, { FC, ReactNode } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';

interface IButtonWidget {
  icon: ReactNode;
  count?: number;
  widgetTo?: string | null;
  onClick: () => void;
}

const ButtonWidget: FC<IButtonWidget> = ({
  icon,
  count,
  widgetTo = null,
  onClick,
}) => {
  const theme = useTheme();
  const notSelectedColor = theme.palette.buttonWidget?.main;
  const selectedColor = theme.palette.buttonWidget?.contrastText;
  const strokeColor =
    widgetTo !== null || (count && count > 0)
      ? selectedColor
      : notSelectedColor;

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
