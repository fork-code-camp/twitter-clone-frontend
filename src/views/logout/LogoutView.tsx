import React, { FC } from 'react';
import { Grid, useTheme } from '@mui/material';
import Navigation from '@/components/navigation/Navigation';
import PageHeader from '@/components/headers/PageHeader';
import { menuLogoutList } from '@/data/configMenu/configMenu';
import UnderLine from '@/common/UnderLine';
import OfferToRegister from '@/components/offerToRegister/OfferToRegister';
import Description from '@/temp/Description';

const LogoutView: FC = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      gap={2}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap', paddingTop: '20px' }}
    >
      <Grid item sx={{ width: { md: '75px', lg: '200px' } }}>
        <Navigation activeItem="View" menuList={menuLogoutList} />
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: '300px', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <UnderLine />
        <PageHeader title="View" />
        <UnderLine />
        <Description />
        <UnderLine />
      </Grid>
      <Grid
        item
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          width: '350px',
        }}
      >
        <OfferToRegister />
      </Grid>
    </Grid>
  );
};

export default LogoutView;
