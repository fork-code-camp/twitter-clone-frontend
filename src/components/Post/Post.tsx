import { Box, Container } from '@mui/material';
import React, { FC } from 'react';
import Avatar from '@/common/Avatar';
import UserHeader from '@/common/UserHeader';
import PassedTime from '@/common/PassedTime';
import PostContent from './PostContent';

type IPost = {
  avatarImg: string;
  avatarAlt: string;
  userName: string;
  userTag: string;
  userPassedTime: string;
  postText?: string;
  postImg?: string;
  postAlt?: string;
};
const Post: FC<IPost> = ({
  avatarImg,
  avatarAlt,
  userName,
  userTag,
  userPassedTime,
  postText,
  postImg,
  postAlt,
}) => {
  return (
    <Container
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
        <PostContent text={postText} img={postImg} alt={postAlt} />
      </Box>
    </Container>
  );
};

export default Post;
