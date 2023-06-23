import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import { ITweet, ITweets } from './types';
import SingleTweet from './SingleTweet';

const Tweets: FC<ITweets> = ({ tweets }, index) => {
  console.log(tweets);
  return (
    <Container disableGutters>
      {tweets &&
        tweets.map((tweet: ITweet) => (
          <Box key={tweet.id}>
            <SingleTweet
              id={tweet.id}
              avatarUrl={tweet.profile.avatarUrl}
              avatarAlt={tweet.profile.avatarUrl}
              username={tweet.profile.username}
              userTag={tweet.profile.username}
              userPassedTime={Number(new Date(tweet.creationDate))}
              tweetText={tweet.text}
              tweetImg={tweet.mediaUrls && tweet.mediaUrls[0]}
              tweetAlt={tweet.mediaUrls && tweet.mediaUrls[0]}
              likeCount={tweet.likes}
              likeIsSelected={false}
              replyCount={tweet.replies}
              replyTo={tweet.replyTo}
              retweetCount={tweet.retweets}
              retweetTo={tweet.retweetTo}
              viewsCount={tweet.views}
            />
            {tweets && tweets.length - 1 != index && <UnderLine />}
          </Box>
        ))}
    </Container>
  );
};

export default Tweets;
