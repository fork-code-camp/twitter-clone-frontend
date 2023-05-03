import React, { FC } from 'react';
import { Box, ToggleButton, Typography } from '@mui/material';
import LikeSVG from '@/assets/icons/Like.svg';

interface ILikeButton {
  count: number;
  selected?: boolean;
  setLikeButtonCount: React.Dispatch<React.SetStateAction<number>>;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const LikeButton: FC<ILikeButton> = ({
  count,
  selected,
  setLikeButtonCount,
  setSelected,
}) => {
  const notSelectedColor = '#5B7083';
  const selectedColor = '#F4245E';
  const toggleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.25,
    minWidth: '40px',
    p: 0,
    background: 'none!important',
    border: 'none',
  };
  const onChange = () => {
    setSelected((selected) => !selected);
    setLikeButtonCount((count) => (selected ? count - 1 : count + 1));
  };

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={onChange}
      sx={toggleStyles}
    >
      <Box sx={{ display: 'flex', strokeWidth: 2 }}>
        <LikeSVG
          style={{
            stroke: selected ? selectedColor : notSelectedColor,
            fill: selected ? selectedColor : 'none',
          }}
        />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{ color: notSelectedColor, lineHeight: 1.1 }}
      >
        {count}
      </Typography>
    </ToggleButton>
  );
};

export default LikeButton;
