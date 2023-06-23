import api from '../api/index';
import { RETWEET_POST } from './config';

export const setRetweet = async (retweetData: any) => {
  const response = await api.post<any>(RETWEET_POST, retweetData);
  return response
}