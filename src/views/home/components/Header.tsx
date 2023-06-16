import React, { FC } from 'react';
import { Container, IconButton, Typography, useTheme } from '@mui/material';
import TopTweet from '@/assets/icons/TopTweet.svg';

const onClick = () => {
  console.log('Header click');
};

interface IHomeHeader {
  title: string;
  hasIcon?: boolean;
}

const Header: FC<IHomeHeader> = ({ title, hasIcon }) => {
  const theme = useTheme();

  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '0 13px',
        padding: '10px 15px',
      }}
    >
      <Typography
        variant="h2"
        fontWeight={700}
        fontSize={19}
        lineHeight="23px"
        color={theme.palette.primary.dark}
      >
        {title}
      </Typography>
      {hasIcon && (
        <IconButton sx={{ m: 0, p: 0 }} onClick={onClick}>
          <TopTweet
            style={{ fill: theme.palette.buttonWidget?.contrastText }}
          />
        </IconButton>
      )}
    </Container>
  );
};

export default Header;
