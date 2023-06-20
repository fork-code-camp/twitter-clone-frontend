import { getTweets } from '@/services/tweetService';
import { useQuery } from 'react-query';

const tweetConfig = {
  getTweets: {
    key: 'getTweets',
    request: async () => {
      const response = await getTweets();
      return response.data;
    },
  },
};

export const useGetTweetQuery = () => {
  const { getTweets: config } = tweetConfig;

  const state = useQuery(config.key, config.request, {
    onSuccess() {
      console.log('твиты получены');
    },
  });
  return state;
};
