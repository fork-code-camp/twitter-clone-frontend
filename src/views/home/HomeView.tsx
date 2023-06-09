import { FC } from 'react';
import { Container } from '@mui/system';
import Inner from '@/views/home/components/Inner/Inner';
import Header from '@/views/home/components/Header';
import PostList from '@/components/Post/PostList';
import { IMakeTweetRequest } from '@/services/types';
import { useTweetQuery } from '@/services/Query/tweet/tweet.query';
import { useMakeTweetMutation } from '@/services/Query/tweet/tweet.mutation';
import { Alert, Box, CircularProgress } from '@mui/material';

const HomePage: FC = () => {
  const { data, isLoading, isError } = useTweetQuery();
  const tweetData = data
    ?.slice(0)
    .reverse()
    .map((element: IMakeTweetRequest) => {
      return element;
    });

  const { mutateAsync: mutateMakeTweet } = useMakeTweetMutation();

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header title="Home" />
      <Inner
        avatarImg={require('../../temp/BlankAvatar.jpg')}
        avatarAlt="avatarAlt"
        onSumbit={(requestData: IMakeTweetRequest) =>
          mutateMakeTweet(requestData)
        }
      />

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
    </Container>
  );
};

export default HomePage;
