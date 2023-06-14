import React, { FC } from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query';
import { menuList } from '@/data/configMenu/configMenu';
import Navigation from '@/components/navigation/Navigation';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import AccountBar from '@/components/headers/AccountBar';
import Search from '@/components/search/Search';

const ProfileView: FC = () => {
  const theme = useTheme();

  const { data: profileData, isLoading: profileDataIsLoading } = useGetAuthorizedUserDataQuery();
  return (
    <Grid container gap={2} justifyContent='center' flexWrap='nowrap' >
      <Grid item sx={{ width: { xs: '75px', sm: '75px', md: '200px', lg: '200px' }, position: 'relative' }} >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'fixed',
            height: '100vh',
            pb: 2,
          }}>
          <Navigation activeItem="Explore" menuList={menuList} />
          <AccountBar isLoading={profileDataIsLoading} hasAvatar isVertical name={profileData && profileData.username} tag={profileData && profileData.username}/>
        </Box>
      </Grid>

      <Grid item
        sx={{
          width: { xs: '350px', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <UnderLine />
        <Search />
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
