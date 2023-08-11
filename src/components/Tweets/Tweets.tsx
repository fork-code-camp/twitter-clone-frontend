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
              id={tweet.retweetTo.id}
              isLiked={tweet.retweetTo.isLiked}
              isRetweeted={tweet.retweetTo.isRetweeted}
              profile={tweet.retweetTo.profile}
              creationDate={tweet.retweetTo.creationDate}
              tweetText={tweet.retweetTo.text}
              tweetImg={tweet.retweetTo.mediaUrls && tweet.retweetTo.mediaUrls[0]}
              tweetAlt={tweet.retweetTo.mediaUrls && tweet.retweetTo.mediaUrls[0]}
              likes={tweet.retweetTo.likes}
              replies={tweet.retweetTo.replies}
              replyTo={tweet.retweetTo.replyTo}
              retweets={tweet.retweetTo.retweets}
              retweetTo={tweet.retweetTo.retweetTo}
              views={tweet.retweetTo.views}
            />
          )}
          {tweet.replyTo && (
            <Reply
              id={tweet.id}
              isLiked={tweet.isLiked}
              isRetweeted={tweet.isRetweeted}
              profile={tweet.profile}
              creationDate={tweet.creationDate}
              tweetText={tweet.text}
              tweetImg={tweet.mediaUrls && tweet.mediaUrls[0]}
              tweetAlt={tweet.mediaUrls && tweet.mediaUrls[0]}
              likes={tweet.likes}
              replies={tweet.replies}
              replyTo={tweet.replyTo}
              retweets={tweet.retweets}
              retweetTo={tweet.retweetTo}
              views={tweet.views}
              replyId={tweet.replyTo.id}
              replyIsLiked={tweet.replyTo.isLiked}
              replyIsRetweeted={tweet.replyTo.isRetweeted}
              replyProfile={tweet.replyTo.profile}
              replycreationDate={tweet.replyTo.creationDate}
              replyTweetText={tweet.replyTo.text}
              replyTweetImg={tweet.replyTo.mediaUrls && tweet.replyTo.mediaUrls[0]}
              replyTweetAlt={tweet.replyTo.mediaUrls && tweet.replyTo.mediaUrls[0]}
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
              id={tweet.id}
              isLiked={tweet.isLiked}
              isRetweeted={tweet.isRetweeted}
              profile={tweet.profile}
              creationDate={tweet.creationDate}
              tweetText={tweet.text}
              tweetImg={tweet.mediaUrls && tweet.mediaUrls[0]}
              tweetAlt={tweet.mediaUrls && tweet.mediaUrls[0]}
              likes={tweet.likes}
              replies={tweet.replies}
              replyTo={tweet.replyTo}
              retweets={tweet.retweets}
              retweetTo={tweet.retweetTo}
              views={tweet.views}
            />
          )}
          {tweets && tweets.length - 1 != index && <UnderLine />}
        </Box>
      ))}
    </Container>
  );
};

export default Tweets;
