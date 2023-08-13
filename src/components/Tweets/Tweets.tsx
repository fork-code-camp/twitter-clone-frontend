import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import Tweet from './Tweet';
import Retweet from './Retweet';
import { IDataTweet, IDataTweets } from './types';

const Tweets: FC<IDataTweets> = ({ tweets }, index) => {
  console.log(tweets);
  return (
    <Container disableGutters>
      {tweets.map((tweet: IDataTweet) => (
        <Box key={tweet.id}>
          {tweet.retweetTo && (
            <Retweet
              {...tweet.retweetTo}
              tweetImg={tweet.retweetTo.mediaUrls && tweet.retweetTo.mediaUrls[0]}
              tweetAlt={tweet.retweetTo.mediaUrls && tweet.retweetTo.mediaUrls[0]}
            />
          )}
          {!tweet.retweetTo && !tweet.replyTo && (
            <Tweet
              {...tweet}
              tweetImg={tweet.mediaUrls && tweet.mediaUrls[0]}
              tweetAlt={tweet.mediaUrls && tweet.mediaUrls[0]}
            />
          )}
          {tweets && tweets.length - 1 != index && <UnderLine />}
        </Box>
      ))}
    </Container>
  );
};

export default Tweets;
