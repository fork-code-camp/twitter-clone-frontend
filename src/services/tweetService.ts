import api from '../api/index';
import { useQuery } from 'react-query';
import { TWEETS_DELETE, TWEETS_GET, TWEETS_POST } from './config';
import { ITweetRequest, ITweetResponse } from './types';

const getTweetConfig = {
  tweet: {
    key: 'tweetData',
    request: async () => {
      const response = api.get(TWEETS_GET);
      return response;
    },
  },
};

export const useTweetQuery = () => {
  const { tweet: config } = getTweetConfig;

  const state = useQuery(config.key, config.request);
  return state;
};

export const DeleteFn = async (id: number) => {
  const response = await api.delete(`${TWEETS_DELETE}/${id}`);
  return response;
};

export const makePostFn = async (data: ITweetRequest) => {
  const response = await api.post<ITweetResponse>(TWEETS_POST, data);
  return response.data;
};
