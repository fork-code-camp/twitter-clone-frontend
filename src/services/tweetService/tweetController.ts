import api from '../../api/index';
import { TWEETS_DELETE, TWEETS_POST } from '../config';
import { IMakeTweetResponse } from '../types';

export const deleteTweet = async (id: number) => {
  const response = await api.delete(`${TWEETS_DELETE}/${id}`);
  return response;
};

export const makeTweet = async (data: FormData) => {
  const response = await api.post<IMakeTweetResponse>(TWEETS_POST, data);
  return response;
};
