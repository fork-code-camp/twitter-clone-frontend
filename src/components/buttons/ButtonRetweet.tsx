import React, { FC, useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import RetweetSVG from '@/assets/icons/Retweet.svg';
import { IRetweetTo } from '../tweets/types';
import {
  useDeleteRetweetMutation,
  useRetweetMutation,
} from '@/query/retweet/retweet.mutation';
interface IButtonRetweet {
  id: number;
  isRetweeted: boolean;
  count?: number;
  retweetTo?: IRetweetTo | null;
}

const ButtonWidget: FC<IButtonRetweet> = ({ id, count, isRetweeted }) => {
  const theme = useTheme();
  const [isActive, setActive] = useState(isRetweeted);
  const { mutateAsync: mutateMakeRetweet } = useRetweetMutation();
  const { mutateAsync: mutateDeleteRetweet } = useDeleteRetweetMutation();

  const notSelectedColor = theme.palette.buttonWidget?.main;
  const selectedColor = theme.palette.buttonWidget?.contrastText;
  const strokeColor = isActive ? selectedColor : notSelectedColor;
  
  console.log('isActive:', isActive, 'id:', id);

  const toggleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.25,
    minWidth: '40px',
    p: 0,
    border: 'none',
  };

  const onClick = async () => {
    if (isActive) {
      await mutateDeleteRetweet(id);
      await setActive(false);
    } else {
      await mutateMakeRetweet(id);
      await setActive(true);
    }
  };

  return (
    <Button onClick={onClick} sx={toggleStyles}>
      <Box sx={{ display: 'flex', stroke: strokeColor }}>
        <RetweetSVG />
      </Box>
      <Typography
        variant="h5"
        fontWeight={500}
        sx={{ color: notSelectedColor }}
      >
        {count}
      </Typography>
    </Button>
  );
};

export default ButtonWidget;
