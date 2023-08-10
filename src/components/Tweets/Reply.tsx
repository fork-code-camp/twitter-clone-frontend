import React, { FC } from 'react';
import { Box, Container, Paper, Typography, useTheme } from '@mui/material';
import CustomAvatar from '@/components/avatar/CustomAvatar';
import UserHeader from '@/components/headers/UserHeader';
import PassedTime from '@/common/PassedTime';
import TweetContentTemplate from './templates/TweetContentTemplate';
import { IDataReply } from './types';
import TweetWidgets from './templates/TweetWidgetsTemplate';
import TaggedText from '@/common/TaggedText';

const Reply: FC<IDataReply> = ({
  id,
  isLiked,
  isRetweeted,
  tweetImg,
  tweetAlt,
  likes,
  replies,
  replyTo,
  retweets,
  retweetTo,
  views,
  username,
  userTag,
  creationDate,
  avatarUrl,
  avatarAlt,
  tweetText,
  replyId,
  replyIsLiked,
  replyIsRetweeted,
  replyAvatarUrl,
  replyAvatarAlt,
  replyUsername,
  replyUserTag,
  replycreationDate,
  replyTweetText,
  replyTweetImg,
  replyTweetAlt,
  replyLikes,
  replyReplies,
  replyReplyTo,
  replyRetweets,
  replyRetweetTo,
  replyViews,
}) => {
  const theme = useTheme();
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: '10px 15px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Box position="relative">
          <CustomAvatar img={replyAvatarUrl} alt={replyAvatarAlt} />
          <Paper
            sx={{
              background: theme.palette.secondary.main,
              position: 'absolute',
              left: '50%',
              width: '2px',
              height: '100%',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              textAlign: 'center',
              gap: 1,
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
            }}
          >
            <UserHeader name={replyUsername} tag={replyUserTag} />
            <PassedTime date={replycreationDate} />
          </Box>

          <TweetContentTemplate
            tweetText={replyTweetText}
            tweetImg={replyTweetImg}
            tweetAlt={replyTweetAlt}
          />
          <TweetWidgets
            id={replyId}
            isLiked={replyIsLiked}
            isRetweeted={replyIsRetweeted}
            likes={replyLikes}
            replies={replyReplies}
            replyTo={replyReplyTo}
            retweets={replyRetweets}
            retweetTo={replyRetweetTo}
            views={replyViews}
          />
        </Box>
      </Box>
      <Box>
        <Box display="flex" flexDirection="row" gap={2}>
          <CustomAvatar img={avatarUrl} alt={avatarAlt} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              width: '100%',
            }}
          >
            <Box display="flex" flexDirection="row">
              <UserHeader name={username} tag={userTag} />
              <PassedTime date={creationDate} />
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex" flexDirection="row" gap={0.5}>
                <Typography
                  variant="h6"
                  color="secondary.main"
                  display="flex"
                  flexDirection="row"
                  gap={0.5}
                >
                  Replying to
                </Typography>
                <TaggedText color="tag.main" tagSymb="@" text={replyUserTag} />
              </Box>

              <TweetContentTemplate
                tweetText={tweetText}
                tweetImg={tweetImg}
                tweetAlt={tweetAlt}
              />
            </Box>
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
      </Box>
    </Container>
  );
};

export default Reply;
