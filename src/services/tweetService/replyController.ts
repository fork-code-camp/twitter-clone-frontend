import api from '@/api';
import { REPLIES_GET, REPLIES_GET_LIST, REPLIES_POST } from '../config';

type IGetReplyResponse = any; /* TODO defaultTweetArray */

export const getReply = async (parentTweetId: number) => {
  const response = await api.get<IGetReplyResponse>(
    `${REPLIES_GET}/${parentTweetId}`
  );
  return response;
};

type IGetReplyListResponse = any; /* TODO defaultTweetArray */

export const getReplyList = async (page?: number, size?: number) => {
  const response = await api.get<IGetReplyListResponse>(
    `${REPLIES_GET_LIST}${page && '/'}${page}${size && '/'}${size}`
  );
  return response;
};

type IMakeRequest = any;
type IMakeResponse = any;

export const makeReply = async (data: IMakeRequest) => {
  const response = await api.post<IMakeResponse>(REPLIES_POST, data);
  return response;
};
