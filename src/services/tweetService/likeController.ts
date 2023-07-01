import api from '@/api';
import { LIKES_DELETE, LIKES_GET, LIKES_POST } from '../config';

export const getLike = async (tweetId: number) => {
  const response = await api.get<boolean>(`${LIKES_GET}/${tweetId}`);
  return response;
};

export const makeLike = async (tweetId: number) => {
  const response = await api.post(`${LIKES_POST}/${tweetId}`);
  return response;
};

export const deleteLike = async (tweetId: number) => {
  const response = await api.delete(`${LIKES_DELETE}/${tweetId}`);
  return response;
};
