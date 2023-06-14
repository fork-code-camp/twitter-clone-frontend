import { Grid, Typography } from '@mui/material';
import Menu from '@/components/menu/Menu';
import Header from '@/views/home/components/Header';
import { menuLogoutList } from '@/data/configMenu/configMenu';

const LogoutView = () => {
  return (
    <Grid container spacing={0} columns={{ sm: 6, md: 8, lg: 12 }}>
      <Grid item sm={1} md={2} lg={3}>
        <Menu menuList={menuLogoutList} />
      </Grid>
      <Grid item sm={5} md={6} lg={6}>
        <Header title="View" />
      </Grid>
      <Grid item sm={0} md={0} lg={3}>
        <Typography
          variant="h6"
          sx={{
            display: { sm: 'none', md: 'none', lg: 'block' },
            textAlign: 'center',
          }}
        >
          in developing
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LogoutView;
