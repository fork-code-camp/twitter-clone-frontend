import React, { FC } from 'react';
import { useGetUserTweetsQuery, useGetTweetUserRepliesQuery } from '@/query/timeline/tweetTimeline.query';
import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query';
import { Box, CircularProgress, Grid, useTheme } from '@mui/material';
import { menuList } from '@/data/configMenu/configMenu';
import PageHeader from '@/components/headers/PageHeader';
import Navigation from '@/components/navigation/Navigation';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import TweetTabPanel from './components/TweetTabPanel';
import UserInfo from '../../components/userInfo/UserInfo';
import AccountBar from '@/components/headers/AccountBar';

const ProfileView: FC = () => {
  const theme = useTheme();
  const { data: userTweets, isLoading: userTweetsIsLoading, isError: userTweetsIsError, } = useGetUserTweetsQuery();
  const { data: userRepliesData, isLoading: userRepliesIsLoading, isError: userRepliesIsError, } = useGetTweetUserRepliesQuery();
  const { data: userInfoData, isLoading: userInfoDataIsLoading } = useGetAuthorizedUserDataQuery();
  return (
    <Grid container gap={2} justifyContent='center' flexWrap='nowrap' >
      <Grid item
        sx={{
          width: { xs: '75px', sm: '75px', md: '200px', lg: '200px' },
          position: 'relative'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'fixed',
            height: '100vh',
            pb: 2,
          }}>
          <Navigation activeItem="Profile" menuList={menuList} />
          {userInfoDataIsLoading && <CircularProgress sx={{ m: 1 }} />}
          {userInfoData && <AccountBar hasAvatar isVertical name={userInfoData.username} tag={userInfoData.username}/>}
        </Box>
      </Grid>

      <Grid item
        sx={{
          width: { xs: '350px', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <PageHeader title="Profile" />
        <UnderLine />
        <UserInfo userInfoData={userInfoData} />
        <UnderLine />
        <TweetTabPanel
          userData={userTweets}
          userIsLoading={userTweetsIsLoading}
          userIsError={userTweetsIsError}
          userReplies={userRepliesData}
          userRepliesIsLoading={userRepliesIsLoading}
          userRepliesIsError={userRepliesIsError}
        />
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

export default ProfileView;
