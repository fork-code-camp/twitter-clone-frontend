import React, { FC } from 'react';
import { Container } from '@mui/material';
import PostComment from './PostActionButtons/PostComment';
import PostLikeToggle from './PostActionButtons/PostLikeToggle';
import PostRetweet from './PostActionButtons/PostRetweet';
import PostShare from './PostActionButtons/PostShare';
import { IPostActions } from '@/types/Post';

const PostActions: FC<IPostActions> = ({
  likeCount,
  likeSelected,
  onChangeLike,
  commentCount,
  commentSelected,
  onChangeComment,
  retweetCount,
  retweetSelected,
  onChangeRetweet,
  shareCount,
  shareSelected,
  onChangeShare,
}) => {
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'raw',
        justifyContent: 'space-between',
      }}
    >
      <PostComment
        count={commentCount}
        selected={commentSelected}
        onChange={onChangeComment}
      />
      <PostRetweet
        count={retweetCount}
        selected={retweetSelected}
        onChange={onChangeRetweet}
      />
      <PostLikeToggle
        count={likeCount}
        selected={likeSelected}
        onChangeLike={onChangeLike}
      />
      <PostShare
        count={shareCount}
        selected={shareSelected}
        onChange={onChangeShare}
      />
    </Container>
  );
};

export default PostActions;
