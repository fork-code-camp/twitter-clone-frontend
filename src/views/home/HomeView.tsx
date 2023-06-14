import { FC } from 'react';
import Inner from '@/views/home/components/Inner/Inner';
import PostList from '@/components/Post/PostList';
import { IMakeTweetRequest } from '@/services/types';
import { useTweetQuery } from '@/services/Query/tweet/tweet.query';
import { useMakeTweetMutation } from '@/services/Query/tweet/tweet.mutation';
import { Alert, Box, CircularProgress, Grid, Typography } from '@mui/material';
import { statusIsAuth } from '@/api';
import { useEffect, useState } from 'react';
import { menuList } from '@/data/configMenu/configMenu';
import Header from './components/Header';
import Menu from '@/components/menu/Menu';

const HomePage: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { data, isLoading, isError } = useTweetQuery();
  const { mutateAsync: mutateMakeTweet } = useMakeTweetMutation();

  useEffect(() => {
    setIsAuth(statusIsAuth);
  }, []);

  const tweetData = data
    ?.slice(0)
    .reverse()
    .map((element: IMakeTweetRequest) => {
      return element;
    });

  return (
    <Grid container spacing={0} columns={{ sm: 6, md: 8, lg: 12 }}>
      <Grid item sm={1} md={2} lg={3}>
        <Menu menuList={menuList} />
      </Grid>
      <Grid item sm={5} md={6} lg={6}>
        <Header title="Home" />
        {isAuth && (
          <Inner
            avatarImg={require('../../temp/BlankAvatar.jpg')}
            avatarAlt="avatarAlt"
            onSumbit={(requestData: IMakeTweetRequest) =>
              mutateMakeTweet(requestData)
            }
          />
        )}

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

        <PostList posts={tweetData} />
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

export default HomePage;
