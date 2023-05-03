import React, { FC } from 'react';
import { Container, IconButton, Typography } from '@mui/material';
import TopTweet from '@/assets/icons/TopTweet.svg';

const onClick = () => {
  console.log('Header click');
};

interface IHomeHeader {
  title: string;
}

const Header: FC<IHomeHeader> = ({ title }) => {
  const lightThemeFontColor = '#0F1419';
  // const darkThemeFontColor = '#e7e9ea';
  const iconColor = '#1DA1F2';

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
        variant='h2'
        fontWeight={700}
        fontSize={19}
        lineHeight="23px"
        color={lightThemeFontColor}
      >
        {title}
      </Typography>
      <IconButton sx={{ m: 0, p: 0 }} onClick={onClick}>
        <TopTweet style={{ fill: iconColor }} />
      </IconButton>
    </Container>
  );
};

export default Header;
