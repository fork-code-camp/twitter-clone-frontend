import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import Tweet from './Tweet';
import Retweet from './Retweet';
import Reply from './Reply';
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
          {tweet.replyTo && (
            <Reply
              {...tweet}
              tweetImg={tweet.mediaUrls && tweet.mediaUrls[0]}
              tweetAlt={tweet.mediaUrls && tweet.mediaUrls[0]}
              replyTweetImg={tweet.replyTo.mediaUrls && tweet.replyTo.mediaUrls[0]}
              replyTweetAlt={tweet.replyTo.mediaUrls && tweet.replyTo.mediaUrls[0]}
              replyId={tweet.replyTo.id}
              replyIsLiked={tweet.replyTo.isLiked}
              replyIsRetweeted={tweet.replyTo.isRetweeted}
              replyProfile={tweet.replyTo.profile}
              replycreationDate={tweet.replyTo.creationDate}
              replyTweetText={tweet.replyTo.text}
              replyLikes={tweet.replyTo.likes}
              replyReplies={tweet.replyTo.replies}
              replyReplyTo={tweet.replyTo.replyTo}
              replyRetweets={tweet.replyTo.retweets}
              replyRetweetTo={tweet.replyTo.retweetTo}
              replyViews={tweet.replyTo.views}
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
