import React, { FC } from 'react';
import InnerTweet from '@/components/inner/InnerTweet';
import { Alert, Box, CircularProgress, Grid, useTheme } from '@mui/material';
import { menuList } from '@/data/configMenu/configMenu';
import PageHeader from '@/components/headers/PageHeader';
import Menu from '@/components/menu/Menu';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import { useGetTweetHomeQuery } from '@/query/timeline/tweetTimeline.query';
import {
  useGetProfileAvatarQuery,
  useGetProfileDataQuery,
} from '@/query/profile/profile.query';
import AccountBar from '@/components/headers/AccountBar';
import Tweets from '@/components/tweets/Tweets';

const HomePage: FC = () => {
  const theme = useTheme();
  const { data: tweetsArray, isLoading, isError } = useGetTweetHomeQuery();
  const { data: avatarUrl } = useGetProfileAvatarQuery();
  const { data: profileData } = useGetProfileDataQuery();
  return (
    <Grid
      container
      gap={2}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap' }}
    >
      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: { sm: '75px', md: '200px', lg: '200px' },
          height: '100vh',
          pb: 2,
        }}
      >
        <Menu activeItem="Home" menuList={menuList} />
        <AccountBar
          hasAvatar
          isVertical
          name={profileData && profileData.username}
          tag={profileData && profileData.username}
        />
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: '300px', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <PageHeader title="Home(получение=timelines/home)" hasIcon />
        <UnderLine />

        <InnerTweet avatarUrl={avatarUrl} avatarAlt="avatarAlt" />
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
        <Tweets tweets={tweetsArray || []} />
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
