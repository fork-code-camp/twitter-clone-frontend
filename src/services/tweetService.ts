import api from '../api/index';
import { TIMELINES_TWEETS_GET, TWEETS_DELETE, TWEETS_POST } from './config';
import { IMakeTweetResponse } from './types';

export const deleteTweet = async (id: number) => {
  const response = await api.delete(`${TWEETS_DELETE}/${id}`);
  return response;
};

export const makeTweet = async (data: FormData) => {
  const response = await api.post<IMakeTweetResponse>(TWEETS_POST, data);
  return response;
};

export const getTweets = async () => {
  const response = await api.get(TIMELINES_TWEETS_GET);
  return response;
};
