import Tweets from '@/components/tweets/Tweets';
import { ITweets } from '@/components/tweets/types';
import React, { FC } from 'react';

const TweetList: FC<ITweets> = ({ tweets }) => {
  return <Tweets tweets={tweets || []} />;
};

export default TweetList;
