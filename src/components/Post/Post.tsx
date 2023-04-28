import { Box, Container } from '@mui/material';
import React, { FC } from 'react';
import Avatar from '@/common/Avatar';
import UserHeader from '@/common/UserHeader';
import PassedTime from '@/common/PassedTime';
import PostContent from './PostContent';

type IPost = {
  id: string;
  avatarImg: string;
  avatarAlt: string;
  userName: string;
  userTag: string;
  userPassedTime: string;
  postText?: string;
  postImg?: string;
  postAlt?: string;
  likeCount: number;
  commentCount: number;
  retweetCount: number;
  shareCount: number;
  likeSelected?: boolean;
  commentSelected?: boolean;
  retweetSelected?: boolean;
  shareSelected?: boolean;
};
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
  likeSelected,
  commentSelected,
  retweetSelected,
  shareSelected,
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
          text={postText}
          img={postImg}
          alt={postAlt}
          likeCount={likeCount}
          likeSelected={likeSelected}
          commentCount={commentCount}
          commentSelected={commentSelected}
          retweetCount={retweetCount}
          retweetSelected={retweetSelected}
          shareCount={shareCount}
          shareSelected={shareSelected}
        />
      </Box>
    </Container>
  );
};

export default Post;
