import React, { FC, useEffect } from 'react';
import InnerTweet from '@/components/inner/InnerTweet';
import { Alert, Box, Button, CircularProgress, Grid, useTheme } from '@mui/material';
import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query';
import { useGetProfileAvatarQuery } from '@/query/profile/avatar.query';
import { useGetTweetHomeQuery } from '@/query/timeline/homeTweets.query';
import PageHeader from '@/components/headers/PageHeader';
import Navigation from '@/components/navigation/Navigation';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import AccountBar from '@/components/headers/AccountBar';
import TweetAndRetweetList from '@/components/tweets/TweetAndRetweetList';
import { useInView } from 'react-intersection-observer';

const HomePage: FC = () => {
  const theme = useTheme();
  const { ref, inView } = useInView()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useGetTweetHomeQuery();
  const { data: avatarUrl } = useGetProfileAvatarQuery();
  const { data: profileData, isLoading: profileDataIsLoading } = useGetAuthorizedUserDataQuery();

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <Grid container gap={2} sx={{ justifyContent: 'center', flexWrap: 'nowrap' }}
    >
      <Grid item
        sx={{
          width: { xs: '75px', sm: '75px', md: '200px', lg: '200px' },
          position: 'relative'
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'fixed',
          height: '100vh',
          pb: 2,
        }}>
          <Navigation plan='authorized' activeItem="Home" />
          <AccountBar
            isLoading={profileDataIsLoading}
            hasAvatar
            isVertical
            name={profileData && profileData.username}
            tag={profileData && profileData.username} />
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: '300px', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <PageHeader title="Home" hasIcon />
        <UnderLine />

        <InnerTweet avatarUrl={avatarUrl} avatarAlt="avatarAlt" />
        <UnderLine />

        <Box width='100%' textAlign='center'> {isLoading && <CircularProgress sx={{ m: 1 }} />} </Box>
        {isError && (<Alert severity="error">Ошибка загрузки постов user</Alert>)}
        {data && data.pages.map((page, index: number) => (
          <React.Fragment key={index}>
            <TweetAndRetweetList tweets={page || []} />
          </React.Fragment>
        ))}
        {hasNextPage && (
          <Button sx={{ width: '100%' }} ref={ref} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          </Button>
        )}
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
