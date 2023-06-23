import Tweets from '@/components/Tweets/Tweets';
import { ITweets } from '@/components/Tweets/types';
import React, { FC } from 'react';

const TweetList: FC<ITweets> = ({ tweets }) => {
  return <Tweets tweets={tweets || []} />;
};

export default TweetList;
