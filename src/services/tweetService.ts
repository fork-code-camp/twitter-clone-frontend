import api from '../api/index';
import { useQuery } from 'react-query';
import { TWEETS_DELETE, TWEETS_GET, TWEETS_POST } from './config';
import { ITweetRequest, ITweetResponse } from './types';

export const useTweetQuery = () => {
  return useQuery('tweetData', PostsFn);
};

export const DeleteFn = async (id: number) => {
  const response = await api.delete(`${TWEETS_DELETE}/${id}`);
  return response;
};

export const PostsFn = async () => {
  const response = await api.get(TWEETS_GET);
  return response;
};

export const makePostFn = async (data: ITweetRequest) => {
  const response = await api.post<ITweetResponse>(TWEETS_POST, data);
  return response.data;
};
