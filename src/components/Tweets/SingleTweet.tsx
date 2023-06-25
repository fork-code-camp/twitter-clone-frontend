import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import Avatar from '@/components/Avatar';
import UserHeader from '@/components/headers/UserHeader';
import PassedTime from '@/common/PassedTime';
import TweetContent from './TweetContent';
import { ISingleTweet } from '@/components/Tweets/types';
import MoreActionButton from '@/components/Tweets/MoreActionButton';

const SingleTweet: FC<ISingleTweet> = ({
  id,
  avatarUrl,
  avatarAlt,
  username,
  userTag,
  userPassedTime,
  tweetText,
  tweetImg,
  tweetAlt,
  likeCount,
  replyCount,
  replyTo,
  retweetCount,
  retweetTo,
  viewsCount,
  likeIsSelected,
}) => {
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
        {/* name, username, time, moreActionBtn */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            <UserHeader name={username} tag={userTag} />
            <PassedTime date={userPassedTime} />
          </Box>
          <MoreActionButton id={id} />
        </Box>
        {/* text, image, widgets */}
        <TweetContent
          id={id}
          tweetText={tweetText}
          tweetImg={tweetImg}
          tweetAlt={tweetAlt}
          likeCount={likeCount}
          likeIsSelected={likeIsSelected}
          replyCount={replyCount}
          replyTo={replyTo}
          retweetCount={retweetCount}
          retweetTo={retweetTo}
          viewsCount={viewsCount}
        />
      </Box>
    </Container>
  );
};

export default SingleTweet;
