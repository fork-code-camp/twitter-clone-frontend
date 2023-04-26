import React from 'react';
import { Container, IconButton, Typography } from '@mui/material';
import TopTweet from '@/assets/TopTweet.svg';

const onClick = () => {
  console.log('HomeHeader click');
};

const HomeHeader = () => {
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '0 13px',
        maxWidth: { xs: '320px', md: '600px' },
        padding: '10px 15px',
      }}
    >
      <Typography
        component="span"
        fontWeight={700}
        fontSize={19}
        lineHeight="23px"
        color="#0F1419"
      >
        Home
      </Typography>
      <IconButton sx={{ m: 0, p: 0 }} onClick={() => onClick()}>
        <TopTweet style={{ fill: '#1DA1F2' }} />
      </IconButton>
    </Container>
  );
};

export default HomeHeader;
