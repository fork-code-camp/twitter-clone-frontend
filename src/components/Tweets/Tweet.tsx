import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import CustomAvatar from '@/components/avatar/CustomAvatar';
import UserHeader from '@/components/headers/UserHeader';
import PassedTime from '@/common/PassedTime';
import TweetContentTemplate from './templates/TweetContentTemplate';
import { ITweet } from '@/components/tweets/types';
import MoreActionButton from '@/components/tweets/MoreActionButton';
import TweetWidgets from './templates/TweetWidgetsTemplate';

const Tweet: FC<ITweet> = ({
  id,
  isLiked,
  isRetweeted,
  avatarUrl,
  avatarAlt,
  username,
  userTag,
  creationDate,
  tweetText,
  tweetImg,
  tweetAlt,
  likes,
  replies,
  replyTo,
  retweets,
  retweetTo,
  views,
}) => {

  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0 13px',
        padding: '10px 15px',
      }}
    >
      <CustomAvatar img={avatarUrl} alt={avatarAlt} />
      <Box sx={{ width: '100%' }}>
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
            <PassedTime date={creationDate} />
          </Box>
          <MoreActionButton id={id} />
        </Box>
        <Box
          sx={{
            m: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: { xs: '100%', md: '100%' },
            maxWidth: { xs: '100%', md: '510px' },
          }}
        >
          <TweetContentTemplate
            tweetText={tweetText}
            tweetImg={tweetImg}
            tweetAlt={tweetAlt}
          />
          <TweetWidgets
            id={id}
            isLiked={isLiked}
            isRetweeted={isRetweeted}
            likes={likes}
            replies={replies}
            replyTo={replyTo}
            retweets={retweets}
            retweetTo={retweetTo}
            views={views}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Tweet;
