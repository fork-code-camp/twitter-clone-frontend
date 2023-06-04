import React, { FC } from 'react';
import { Box, ToggleButton, Typography, useTheme } from '@mui/material';
import LikeSVG from '@/assets/icons/Like.svg';

interface IButtonLike {
  count: number;
  selected?: boolean;
  setButtonLikeCount: React.Dispatch<React.SetStateAction<number>>;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
}

const ButtonLike: FC<IButtonLike> = ({
  count,
  selected,
  setButtonLikeCount,
  setSelected,
  onClick,
}) => {
  const theme = useTheme();
  const notSelectedColor = theme.palette.buttonLike?.main;
  const selectedColor = theme.palette.buttonLike?.contrastText;
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
    setButtonLikeCount((count) => (selected ? count - 1 : count + 1));
  };

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={onChange}
      onClick={onClick}
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

export default ButtonLike;
