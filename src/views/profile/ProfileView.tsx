import React, { FC } from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import { menuList } from '@/data/configMenu/configMenu';
import PageHeader from '@/components/headers/PageHeader';
import Menu from '@/components/menu/Menu';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import {
  useGetTweetUserQuery,
  useGetTweetUserRepliesQuery,
} from '@/query/timeline/tweetTimeline.query';
import TweetTabPanel from './components/TweetTabPanel';
import UserInfo from '../../components/userInfo/UserInfo';
import AccountBar from '@/components/headers/AccountBar';
import { useGetProfileDataQuery } from '@/query/profile/profile.query';

const ProfileView: FC = () => {
  const theme = useTheme();
  const {
    data: userData,
    isLoading: userIsLoading,
    isError: userIsError,
  } = useGetTweetUserQuery();
  const {
    data: userRepliesData,
    isLoading: userRepliesIsLoading,
    isError: userRepliesIsError,
  } = useGetTweetUserRepliesQuery();
  const { data: profileData } = useGetProfileDataQuery();
  return (
    <Grid
      container
      gap={2}
      justifyContent='center' flexWrap='nowrap'
    >
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
          <Menu activeItem="Profile" menuList={menuList} />
          <AccountBar
            hasAvatar
            isVertical
            name={profileData && profileData.username}
            tag={profileData && profileData.username}
          />
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
        <UserInfo />
        <UnderLine />
        <TweetTabPanel
          userData={userData}
          userIsLoading={userIsLoading}
          userIsError={userIsError}
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
