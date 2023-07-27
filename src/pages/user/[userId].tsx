import React from 'react';
import { useRouter } from 'next/router'
import { Box, Grid, Typography } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import AccountBar from '@/components/headers/AccountBar';
import PageHeader from '@/components/headers/PageHeader';
import News from '@/components/news/News';
import UserInfo from '@/components/userInfo/UserInfo';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import { menuList } from '@/data/configMenu/configMenu';
import theme from '@/theme/theme';
import Navigation from '@/components/navigation/Navigation';

const User = () => {
  const router = useRouter()
  const username = router.query.userId || 'undefined'



  return (
    <>
      <Typography>User: {username}</Typography>
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
          <Navigation activeItem="Profile" menuList={menuList} />
          {/* <AccountBar
            hasAvatar
            isVertical
            name={profileData && profileData.username}
            tag={profileData && profileData.username}
          /> */}
        </Box>
      </Grid>

      <Grid item
        sx={{
          width: { xs: '350px', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <PageHeader title={username.toString()} />
        <UnderLine />
        {/* <UserInfo /> */}
        <UnderLine />
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
    </>
  );
};

export default User;
