import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import Avatar from '@/common/Avatar';
import UserHeader from '@/common/UserHeader';
import PassedTime from '@/common/PassedTime';
import PostContent from './PostContent';
import { IPost } from '@/types/Post';

const Post: FC<IPost> = ({
  id,
  avatarImg,
  avatarAlt,
  userName,
  userTag,
  userPassedTime,
  postText,
  postImg,
  postAlt,
  likeCount,
  commentCount,
  retweetCount,
  shareCount,
  likeIsSelected,
}) => {
  return (
    <Container
      id={id}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0 13px',
        maxWidth: { xs: '320px', md: '600px' },
        padding: '10px 15px',
      }}
    >
      <Avatar img={avatarImg} alt={avatarAlt} />
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <UserHeader name={userName} tag={userTag} />
          <PassedTime date={userPassedTime} />
        </Box>
        <PostContent
          postText={postText}
          postImg={postImg}
          postAlt={postAlt}
          likeCount={likeCount}
          likeIsSelected={likeIsSelected}
          commentCount={commentCount}
          retweetCount={retweetCount}
          shareCount={shareCount}
        />
      </Box>
    </Container>
  );
};

export default Post;
