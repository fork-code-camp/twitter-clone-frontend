import { makeTweet } from '@/services/tweetService';
import { IMakeTweetRequest } from '@/services/types';
import { useMutation, useQueryClient } from 'react-query';

const tweetConfig = {
  makeTweet: {
    key: 'makeTweet',
    request: async (params: IMakeTweetRequest) => {
      const response = await makeTweet(params);
      return response.data;
    },
  },
};

export const useMakeTweetMutation = () => {
  const queryClient = useQueryClient();

  const { makeTweet: config } = tweetConfig;
  const state = useMutation(config.request, {
    onSuccess(data) {
      queryClient.invalidateQueries();
      console.log('Пост создан', data);
    },
    onError(error) {
      console.log('ошибка создания поста', error);
    },
  });

  return state;
};
