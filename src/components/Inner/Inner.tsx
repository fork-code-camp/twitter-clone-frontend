import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import InnerActions from './InnerActions';
import InnerAvatar from './InnerAvatar';
import InnerButton from './InnerButton';
import InnerInput from './InnerInput';

const Inner = () => {
  const [inputValue, setInputValue] = useState('');

  function onChangeInput(value: string) {
    setInputValue(value);
    console.log('value: ' + inputValue);
  }

  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0 13px',
        maxWidth: { xs: '320px', md: '600px' },
        padding: '10px 15px',
        border: '1px solid #ebeef0',
      }}
    >
      <InnerAvatar
        img={require('@/data/configInner/avatar/TempAvatar.png')}
        alt="temp"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 1,
        }}
      >
        <InnerInput onChangeInput={onChangeInput} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '0 10px',
          }}
        >
          <InnerActions />
          <InnerButton inputValue={inputValue} />
        </Box>
      </Box>
    </Container>
  );
};

export default Inner;
