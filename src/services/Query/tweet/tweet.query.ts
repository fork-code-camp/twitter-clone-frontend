import { getTweets } from '@/services/tweetService';
import { useQuery } from 'react-query';

const tweetConfig = {
  getTweets: {
    key: 'getTweets',
    request: async () => {
      const response = await getTweets();
      console.log(response);

      return response.data;
    },
  },
};

export const useTweetQuery = () => {
  const { getTweets: config } = tweetConfig;

  const state = useQuery(config.key, config.request);
  return state;
};
