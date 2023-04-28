import React, { FC } from 'react';
import { Box, ToggleButton, Typography } from '@mui/material';
import ShareSVG from '@/assets/Share.svg';

type IPostShare = {
  count: number;
  selected?: boolean;
  onChange: () => void;
};

const notSelectedColor = '#5B7083';
const selectedColor = '#1DA1F2';

const PostShare: FC<IPostShare> = ({ count, selected, onChange }) => {
  return (
    <ToggleButton
      component="span"
      value="check"
      selected={selected}
      onChange={() => {
        onChange();
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
      <Box sx={{ display: 'flex' }}>
        <ShareSVG
          style={{
            stroke: selected ? selectedColor : notSelectedColor,
            fill: selected && selectedColor,
          }}
        />
      </Box>
      <Typography
        component="span"
        sx={{ color: notSelectedColor, lineHeight: 1.1 }}
      >
        {count}
      </Typography>
    </ToggleButton>
  );
};

export default PostShare;
