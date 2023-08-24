import api from '@/api';
import {
  TIMELINES_TWEETS_GET_USER,
  TIMELINES_TWEETS_GET_USER_BY_ID,
  TIMELINES_TWEETS_GET_USER_HOME,
  TIMELINES_TWEETS_GET_USER_REPLIES,
} from '../config';

export const getHomeTweets = async () => {
  const response = await api.get(TIMELINES_TWEETS_GET_USER_HOME);
  return response;
};

export const getUserTweets = async (args: {page: number, size: number}) => {
  const {page, size} = args
  const response = await api.get(TIMELINES_TWEETS_GET_USER + `?page=${page}&size=${size}`);
  return response;
};
export const getUserTweetsById = async (profileId: string) => {
  const response = await api.get(TIMELINES_TWEETS_GET_USER_BY_ID + '/' + profileId);
  return response;
};

export const getUserRepliesTweets = async () => {
  const response = await api.get(TIMELINES_TWEETS_GET_USER_REPLIES);
  return response;
};
