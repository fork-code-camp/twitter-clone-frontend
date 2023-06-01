import { FC } from 'react';
import { Container } from '@mui/system';
import { useMutation, useQueryClient } from 'react-query';
import { useTweetQuery, makePostFn } from '../../services/tweetService';
import Inner from '@/views/home/components/Inner/Inner';
import Header from '@/views/home/components/Header';
import PostList from '@/components/Post/PostList';
import { ITweetRequest } from '@/services/types';

const HomePage: FC = () => {
  const { data, isLoading, isError } = useTweetQuery();
  const tweetData = data?.data
    .slice(0)
    .reverse()
    .map((element: ITweetRequest) => {
      return element;
    });

  const queryClient = useQueryClient();

  const { mutate: mutateMakeTweet } = useMutation(
    (newPost: ITweetRequest) => makePostFn(newPost),
    {
      onSuccess: () => queryClient.invalidateQueries(),
      onError: () => console.error('ошибка создания поста'),
    }
  );

  const onSumbit = async (data: ITweetRequest) => {
    mutateMakeTweet(data);
  };

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
      <PostList posts={tweetData} />
    </Container>
  );
};

export default HomePage;
