import React, { FC, useState, useEffect } from 'react';
import { Box, ToggleButton, Typography } from '@mui/material';
import LikeSVG from '@/assets/Like.svg';

type ILikeToggle = {
  count: number;
  selected?: boolean;
  onChangeLike: (likeCount: number) => void;
};

const notSelectedColor = '#5B7083';
const selectedColor = '#F4245E';

const LikeToggle: FC<ILikeToggle> = ({ count, selected, onChangeLike }) => {
  const [selectedBtn, setSelectedBtn] = useState(selected);
  const [likeCount, setLikeCount] = useState(count);

  useEffect(() => onChangeLike(likeCount), [likeCount, onChangeLike]);

  return (
    <ToggleButton
      value="check"
      selected={selectedBtn}
      onChange={() => {
        setSelectedBtn((selected) => !selected);
        setLikeCount((likeCount) =>
          selectedBtn ? likeCount - 1 : likeCount + 1
        );
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.25,
        p: 0,
        background: 'none!important',
        border: 'none',
        minWidth: '50px',
      }}
    >
      <Box sx={{ display: 'flex', strokeWidth: 2 }}>
        <LikeSVG
          style={{
            stroke: selectedBtn ? selectedColor : notSelectedColor,
            fill: selectedBtn ? selectedColor : 'none',
          }}
        />
      </Box>
      <Typography
        component="span"
        sx={{ color: notSelectedColor, lineHeight: 1.1 }}
      >
        {likeCount}
      </Typography>
    </ToggleButton>
  );
};

export default LikeToggle;
