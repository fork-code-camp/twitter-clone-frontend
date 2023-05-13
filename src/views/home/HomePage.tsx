import { FC } from 'react';
import { Container } from '@mui/system';
import { useMutation, useQueryClient } from 'react-query';
import { useTweetQuery, tweetResponse } from '../../services/api';
import Inner from '@/views/home/components/Inner/Inner';
import Header from '@/views/home/components/Header';
import PostList from '@/components/Post/PostList';
import { ITweetResponse } from '@/services/types';

const HomePage: FC = () => {
  const { data, isLoading, isError } = useTweetQuery();
  const queryClient = useQueryClient();

  async function createTweet(data: ITweetResponse) {
    tweetResponse(data);
  }
  const tweetMutation = useMutation(
    (newPost: ITweetResponse) => createTweet(newPost),
    {
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: ['tweetData'],
          exact: true,
        }),
    }
  );

  async function onSumbit(data: ITweetResponse) {
    tweetMutation.mutate(data);
  }

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header title="Home" />
      <Inner
        avatarImg={require('../../temp/BlankAvatar.jpg')}
        avatarAlt="avatarAlt"
        onSumbit={onSumbit}
      />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {!data && <p>nodata</p>}
      <PostList posts={data?.data} />
    </Container>
  );
};

export default HomePage;
