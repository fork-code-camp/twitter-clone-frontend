import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import Avatar from '@/components/Avatar';
import UserHeader from '@/components/headers/UserHeader';
import PassedTime from '@/common/PassedTime';
import PostContent from './PostContent';
import { ISinglePost } from '@/components/Post/types';

const SinglePost: FC<ISinglePost> = ({
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
        padding: '10px 15px',
      }}
    >
      <Avatar img={avatarImg} alt={avatarAlt} />
      <Box sx={{ width: '100%' }}>
        {/* name, username, time */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <UserHeader name={userName} tag={userTag} />
          <PassedTime date={userPassedTime} />
        </Box>
        {/* text, image, widgets */}
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

export default SinglePost;
