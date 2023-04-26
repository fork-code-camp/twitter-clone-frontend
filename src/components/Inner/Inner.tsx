import { Box, Container } from '@mui/material';
import React, { FC, useState } from 'react';
import InnerActions from './InnerActions';
import Avatar from '@/common/Avatar';
import InnerButton from './InnerButton';
import InnerInput from './InnerInput';

type IInner = {
  avatarImg: string;
  avatarAlt: string;
};

const Inner: FC<IInner> = ({ avatarImg, avatarAlt }) => {
  const [inputValue, setInputValue] = useState('');

  function onChangeInput(value: string) {
    setInputValue(value);
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
      }}
    >
      <Avatar img={avatarImg} alt={avatarAlt} />
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
