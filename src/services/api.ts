import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL, GET_TWEETS, POST_TWEETS } from './config';
import getToken from '@/services/getToken';
import { ITweetResponse } from './types';

getToken();

const $api = axios.create({
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
      const data = $api.get(GET_TWEETS);
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
    $api.post(POST_TWEETS, data);
  } catch (error) {
    console.log('ошибка отправки поста', error);
  }
};
