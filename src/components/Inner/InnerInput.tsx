import React, { FC, useState, useEffect } from 'react';
import { Box, TextareaAutosize } from '@mui/material';

type IInnerInput = {
  onChangeInput: (value: string) => void;
};
const InnerInput: FC<IInnerInput> = ({ onChangeInput }) => {
  const [value, setValue] = useState('');

  useEffect(() => onChangeInput(value), [onChangeInput, value]);

  return (
    <Box component="form" sx={{ width: '100%' }} noValidate autoComplete="off">
      <TextareaAutosize
        minRows={3}
        placeholder="What’s happening?"
        maxLength={281}
        style={{
          width: '100%',
          minHeight: 18,
          outline: 'none',
          border: 'none',
          resize: 'none',
          fontSize: 20,
          fontFamily: 'system-ui',
          color: '#0F1419',
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

export default InnerInput;
