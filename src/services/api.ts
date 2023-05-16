import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL, DELETE_TWEETS, GET_TWEETS, POST_TWEETS } from './config';
import getToken from '@/services/getToken';
import { ITweetResponse } from './types';

getToken();

export const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('auth-token')}`;
  return config;
});

const getTweetConfig = {
  tweet: {
    key: 'tweetData',
    request: async () => {
      const data = await $api.get(GET_TWEETS);
      return data;
    },
  },
};

export const useTweetQuery = () => {
  const { tweet: config } = getTweetConfig;

  return useQuery(config.key, config.request);
};

export const tweetResponse = async (data: ITweetResponse) => {
  try {
    await $api.post(POST_TWEETS, data);
  } catch (error) {
    console.log('ошибка отправки поста', error);
  }
};

export const deleteTweets = async (id: number) => {
  try {
    await $api.delete(`${DELETE_TWEETS}/${id}`).then((res) => console.log(res.data));
  } catch (error) {
    console.log('ошибка удаления постов', error);
  }
};
