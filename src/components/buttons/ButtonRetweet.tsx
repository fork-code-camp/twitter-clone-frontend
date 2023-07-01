import React, { FC, ReactNode, useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { IRetweetTo } from '../tweets/types';
import {
  useDeleteRetweetMutation,
  useRetweetMutation,
} from '@/query/retweet/retweet.mutation';
interface IButtonRetweet {
  id: number;
  icon: ReactNode;
  count?: number;
  retweetTo?: IRetweetTo | null;
}

const ButtonWidget: FC<IButtonRetweet> = ({ id, icon, count, retweetTo }) => {
  const theme = useTheme();
  const [isActive, setActive] = useState(retweetTo !== null);
  const { mutateAsync: mutateMakeRetweet } = useRetweetMutation();
  const { mutateAsync: mutateDeleteRetweet } = useDeleteRetweetMutation();

  console.log('isActive:', isActive, 'id:', id);

  const onClick = async () => {
    if (isActive) {
      await mutateDeleteRetweet(id);
      await setActive(false);
    } else {
      await mutateMakeRetweet(id);
      await setActive(true);
    }
  };

  const notSelectedColor = theme.palette.buttonWidget?.main;
  const selectedColor = theme.palette.buttonWidget?.contrastText;
  const strokeColor = isActive ? selectedColor : notSelectedColor;

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
