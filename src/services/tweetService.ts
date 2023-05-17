import $api from '@/http';
import { useQuery } from 'react-query';
import { DELETE_TWEETS, GET_TWEETS, POST_TWEETS } from './config';
import { ITweetResponse } from './types';

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
