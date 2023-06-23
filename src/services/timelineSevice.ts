import api from "@/api";
import { TIMELINES_TWEETS_GET_USER, TIMELINES_TWEETS_GET_USER_HOME, TIMELINES_TWEETS_GET_USER_REPLIES } from "./config";

export const getHomeTweets = async () => {
  const response = await api.get(TIMELINES_TWEETS_GET_USER_HOME);
  return response;
};

export const getUserTweets = async () => {
  const response = await api.get(TIMELINES_TWEETS_GET_USER);
  return response;
};

export const getUserRepliesTweets = async () => {
  const response = await api.get(TIMELINES_TWEETS_GET_USER_REPLIES);
  return response;
};