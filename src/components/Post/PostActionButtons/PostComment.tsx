import React, { FC } from 'react';
import { Box, ToggleButton, Typography } from '@mui/material';
import CommentSVG from '@/assets/Comment.svg';

type IPostComment = {
  count: number;
  selected?: boolean;
  onChange: () => void;
};

const notSelectedColor = '#5B7083';
const selectedColor = '#1DA1F2';

const PostComment: FC<IPostComment> = ({ count, selected, onChange }) => {
  return (
    <ToggleButton
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
      <Box component="span" sx={{ display: 'flex' }}>
        <CommentSVG
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

export default PostComment;
