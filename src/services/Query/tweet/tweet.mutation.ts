import { makeTweet } from '@/services/tweetService';
import { IMakeTweetRequest } from '@/services/types';
import { useMutation, useQueryClient } from 'react-query';

const tweetConfig = {
  makeTweet: {
    key: 'makeTweet',
    request: async (requestData: IMakeTweetRequest) => {
      const mydata = await new FormData();
      const blob = new Blob([JSON.stringify({ text: requestData.text })], {
        type: 'application/json',
      });

      await mydata.append('request', blob);
      await mydata.append('files', requestData.file[0]);

      const response = await makeTweet(mydata);
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
