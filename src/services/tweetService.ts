import api from '../api/index';
import { TWEETS_DELETE, TWEETS_GET, TWEETS_POST } from './config';
import { IMakeTweetRequest, IMakeTweetResponse } from './types';

export const deleteTweet = async (id: number) => {
  const response = await api.delete(`${TWEETS_DELETE}/${id}`);
  return response;
};

export const makeTweet = async (data: IMakeTweetRequest) => {
  const response = await api.post<IMakeTweetResponse>(TWEETS_POST, data);
  return response;
};

export const getTweets = async () => {
  const response = await api.get(TWEETS_GET);
  return response;
};
