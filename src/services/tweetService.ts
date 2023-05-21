import $api from '../api/index';
import { useQuery } from 'react-query';
import { TWEETS_DELETE, TWEETS_GET, TWEETS_POST } from './config';
import { ITweetResponse } from './types';

const getTweetConfig = {
  tweet: {
    key: 'tweetData',
    request: async () => {
      const data = await $api.get(TWEETS_GET);
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
    await $api.post(TWEETS_POST, data);
  } catch (error) {
    console.log('ошибка отправки поста', error);
  }
};

export const deleteTweets = async (id: number) => {
  try {
    await $api
      .delete(`${TWEETS_DELETE}/${id}`)
      .then((res) => console.log(res.data));
  } catch (error) {
    console.log('ошибка удаления постов', error);
  }
};
