import { TextField } from '@mui/material';
import React from 'react';
import InputMask from 'react-input-mask';

const MyInputMask = (props) => {
  const { mask, ...otherProps } = props;

  return (
    <InputMask mask={mask} {...otherProps}>
      {(inputProps) => <TextField {...inputProps} />}
    </InputMask>
  );
};

export default MyInputMask;