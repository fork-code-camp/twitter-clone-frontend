import { Box, Button, Container } from '@mui/material';
import React, { FC, useState } from 'react';
import InnerActions from './InnerActions';
import Avatar from '@/common/Avatar';
import Input from '../../../../common/Input';

interface IInner {
  avatarImg: string;
  avatarAlt: string;
};

const Inner: FC<IInner> = ({ avatarImg, avatarAlt }) => {
  const [inputValue, setInputValue] = useState('');

  const isDisable = inputValue === '';

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
        <Input setInputValue={setInputValue} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '0 10px',
          }}
        >
          <InnerActions />
          <Button
            type="submit"
            disabled={isDisable}
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
        </Box>
      </Box>
    </Container>
  );
};

export default Inner;
