import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import { ITweet, ITweets } from './types';
import SingleTweet from './SingleTweet';
import Retweet from './Retweet';

const Tweets: FC<ITweets> = ({ tweets }, index) => {
  console.log(tweets);
  return (
    <Container disableGutters>
      {tweets.map((tweet: ITweet) => (
        <Box key={tweet.id}>
          {tweet.retweetTo && (
            <Retweet
              id={tweet.retweetTo.id}
              isLiked={tweet.retweetTo.isLiked}
              isRetweeted={tweet.retweetTo.isRetweeted}
              avatarUrl={tweet.retweetTo.profile.avatarUrl}
              avatarAlt={tweet.retweetTo.profile.avatarUrl}
              username={tweet.retweetTo.profile.username}
              userTag={tweet.retweetTo.profile.username}
              userPassedTime={Number(new Date(tweet.retweetTo.creationDate))}
              tweetText={tweet.retweetTo.text}
              tweetImg={
                tweet.retweetTo.mediaUrls && tweet.retweetTo.mediaUrls[0]
              }
              tweetAlt={
                tweet.retweetTo.mediaUrls && tweet.retweetTo.mediaUrls[0]
              }
              likes={tweet.retweetTo.likes}
              replies={tweet.retweetTo.replies}
              replyTo={tweet.retweetTo.replyTo}
              retweets={tweet.retweetTo.retweets}
              retweetTo={tweet.retweetTo.retweetTo}
              viewsCount={tweet.retweetTo.views}
            />
          )}
          {!tweet.retweetTo && (
            <SingleTweet
              id={tweet.id}
              isLiked={tweet.isLiked}
              isRetweeted={tweet.isRetweeted}
              avatarUrl={tweet.profile.avatarUrl}
              avatarAlt={tweet.profile.avatarUrl}
              username={tweet.profile.username}
              userTag={tweet.profile.username}
              userPassedTime={Number(new Date(tweet.creationDate))}
              tweetText={tweet.text}
              tweetImg={tweet.mediaUrls && tweet.mediaUrls[0]}
              tweetAlt={tweet.mediaUrls && tweet.mediaUrls[0]}
              likes={tweet.likes}
              replies={tweet.replies}
              replyTo={tweet.replyTo}
              retweets={tweet.retweets}
              retweetTo={tweet.retweetTo}
              viewsCount={tweet.views}
            />
          )}
          {tweets && tweets.length - 1 != index && <UnderLine />}
        </Box>
      ))}
    </Container>
  );
};

export default Tweets;
