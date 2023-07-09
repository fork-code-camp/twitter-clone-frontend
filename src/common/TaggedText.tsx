import { Typography } from '@mui/material';
import React, { FC } from 'react';

interface ITaggedText {
  text: string;
  tagSymb?: string;
  color?: string;
}
const TaggedText: FC<ITaggedText> = ({
  text = 'null',
  tagSymb = '@',
  color = 'inherit',
}) => {
  return (
    <Typography variant="h6" color={color}>
      {tagSymb +
        text.toLowerCase().replace(/[\s~'@#%&*()\-_=+[\]}\\;:'",<.>/?]/g, '')}
    </Typography>
  );
};

export default TaggedText;
