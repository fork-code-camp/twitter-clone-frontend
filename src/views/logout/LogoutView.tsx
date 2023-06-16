import React, { FC } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import Menu from '@/components/menu/Menu';
import Header from '@/views/home/components/Header';
import { menuLogoutList } from '@/data/configMenu/configMenu';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';

const LogoutView: FC = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      gap={2}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap' }}
    >
      <Grid item sx={{ width: { md: '75px', lg: '200px' } }}>
        <Menu menuList={menuLogoutList} />
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: '300px', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <Header title="View" />
        <UnderLine />
        <Typography sx={{ p: 2, textAlign: 'center' }}>
          * здесь будут рандомные посты для неавторизованных пользователей*
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          width: '350px',
        }}
      >
        <News />
      </Grid>
    </Grid>
  );
};

export default LogoutView;
