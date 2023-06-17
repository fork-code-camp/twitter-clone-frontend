import React, { FC } from 'react';
import img from '../../temp/BlankAvatar.jpg';
import { Box, Container, useTheme } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import Header from '@/views/home/components/Header';
import SingleWhoToFollow from './SingleWhoToFollow';

const temp = [
  {
    name: 'Bessie Cooper',
    tag: '@alessandroveronezi',
    avatarImg: img,
    altImg: 'alt',
    url: '/',
    followURL: '#',
  },
  {
    name: 'Jenny Wilson',
    tag: '@gabrielcantarin',
    avatarImg: img,
    altImg: 'alt',
    url: '/',
    followURL: '#',
  },
];

const WhoToFollow: FC = () => {
  const theme = useTheme();
  return (
    <Container
      disableGutters
      sx={{
        background: theme.palette.background.default,
        borderRadius: '16px',
      }}
    >
      <Header title="Who to follow" />
      {temp.map((user, index) => (
        <Box key={user.tag}>
          <SingleWhoToFollow {...user} />
          {temp.length - 1 != index && <UnderLine />}
        </Box>
      ))}
    </Container>
  );
};

export default WhoToFollow;
