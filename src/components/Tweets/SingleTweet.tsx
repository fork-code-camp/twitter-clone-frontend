import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import Avatar from '@/components/Avatar';
import UserHeader from '@/components/headers/UserHeader';
import PassedTime from '@/common/PassedTime';
import TweetContent from './TweetContent';
import { ISingleTweet } from '@/components/tweets/types';
import MoreActionButton from '@/components/tweets/MoreActionButton';

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
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: '8px',
            }}
          >
            <UserHeader name={username} tag={userTag} />
            <PassedTime date={userPassedTime} />
          </Box>
          <MoreActionButton id={id} />
        </Box>
        {/* text, image, widgets */}
        {retweetTo && (
          <SingleTweet
            id={retweetTo.id}
            avatarUrl={retweetTo.profile.avatarUrl}
            avatarAlt={retweetTo.profile.avatarUrl}
            username={retweetTo.profile.username}
            userTag={retweetTo.profile.username}
            userPassedTime={Number(new Date(retweetTo.creationDate))}
            tweetText={retweetTo.text}
            tweetImg={retweetTo.mediaUrls && retweetTo.mediaUrls[0]}
            tweetAlt={retweetTo.mediaUrls && retweetTo.mediaUrls[0]}
            likeCount={retweetTo.likes}
            likeIsSelected={false}
            replyCount={retweetTo.replies}
            replyTo={retweetTo.replyTo}
            retweetCount={retweetTo.retweets}
            retweetTo={retweetTo.retweetTo}
            viewsCount={retweetTo.views}
          />
        )}
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
