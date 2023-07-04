import React, { FC } from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import Avatar from '@/components/Avatar';
import UserHeader from '@/components/headers/UserHeader';
import PassedTime from '@/common/PassedTime';
import TweetContent from './TweetContent';
import { ISingleTweet } from '@/components/tweets/types';
import RetweetSVG from '@/assets/icons/Retweet.svg';
const Retweet: FC<ISingleTweet> = ({
  id,
  isLiked,
  isRetweeted,
  avatarUrl,
  avatarAlt,
  username,
  userTag,
  userPassedTime,
  tweetText,
  tweetImg,
  tweetAlt,
  likes,
  replies,
  replyTo,
  retweets,
  retweetTo,
  viewsCount,
}) => {
  const theme = useTheme();
  return (
    <Container
      id={id.toString()}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0 13px',
        padding: '10px 15px',
      }}
    >
      <Avatar img={avatarUrl} alt={avatarAlt} />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <RetweetSVG width="15" height="11" />
            <Typography
              variant="h6"
              sx={{ color: theme.palette.secondary.main }}
            >
              /profile/me/ Retweeted
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              textAlign: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: '8px',
            }}
          >
            <UserHeader name={username} tag={userTag} />
            <PassedTime date={userPassedTime} />
          </Box>
        </Box>
        <TweetContent
          id={id}
          isLiked={isLiked}
          isRetweeted={isRetweeted}
          tweetText={tweetText}
          tweetImg={tweetImg}
          tweetAlt={tweetAlt}
          likes={likes}
          replies={replies}
          replyTo={replyTo}
          retweets={retweets}
          retweetTo={retweetTo}
          viewsCount={viewsCount}
        />
      </Box>
    </Container>
  );
};

export default Retweet;
