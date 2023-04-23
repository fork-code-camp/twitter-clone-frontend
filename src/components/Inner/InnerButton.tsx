import { Button } from '@mui/material';
import React, { FC } from 'react';

type IInnerButton = {
  inputValue: string
}

const InnerButton:FC<IInnerButton> = ({inputValue}) => {
  return (
    <Button
      type="submit"
      disabled={inputValue === ''}
      variant="contained"
      sx={{
        borderRadius: '100px',
        width: '77px',
        height: '39px',
        fontWeight: 700,
      }}
    >
      Tweet
    </Button>
  );
};

export default InnerButton;
