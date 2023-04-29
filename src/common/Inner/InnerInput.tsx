import React, { FC, useState } from 'react';
import { TextareaAutosize } from '@mui/material';

interface IInnerInput {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const InnerInput: FC<IInnerInput> = ({ setInputValue }) => {
  const [value, setValue] = useState('');

  const lightThemeFontColor = '#0F1419';
  // const darkThemeFontColor = '#e7e9ea';

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setValue(e.target.value);
    setInputValue(e.target.value);
  };

  return (
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
          color: lightThemeFontColor,
        }}
        value={value}
        onChange={(e) => {onChange(e)}}
      />
  );
};

export default InnerInput;
