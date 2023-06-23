import React, { FC } from 'react';
import Inner from '@/components/Inner/Inner';
import { Alert, Box, CircularProgress, Grid, useTheme } from '@mui/material';
import { menuList } from '@/data/configMenu/configMenu';
import Header from '@/components/Header';
import Menu from '@/components/menu/Menu';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import { useGetTweetHomeQuery } from '@/services/Query/timeline/tweetTimeline.query';
import TweetList from '../home/TweetList';

const HomePage: FC = () => {
  const theme = useTheme();
  const { data, isLoading, isError } = useGetTweetHomeQuery();

  return (
    <Grid
      container
      gap={2}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap' }}
    >
      <Grid item sx={{ width: { md: '75px', lg: '200px' } }}>
        <Menu menuList={menuList} />
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: '300px', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <Header title="Home" hasIcon />
        <UnderLine />

        <Inner
          avatarUrl={require('../../temp/BlankAvatar.jpg')}
          avatarAlt="avatarAlt"
        />
        <UnderLine />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {isLoading && <CircularProgress />}
          {isError && <Alert severity="error">Ошибка загрузки постов</Alert>}
        </Box>

        <TweetList tweets={data} />
      </Grid>
      <Grid
        item
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
          flexDirection: 'column',
          gap: '30px',
          width: '350px',
        }}
      >
        <News />
        <WhoToFollow />
      </Grid>
    </Grid>
  );
};

export default HomePage;
