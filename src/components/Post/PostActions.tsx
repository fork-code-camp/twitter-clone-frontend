import React, { FC, useState } from 'react';
import { Container } from '@mui/material';
import LikeToggle from './LikeButton';
import ActionButton from './ActionButton';
import CommentSVG from '@/assets/icons/Comment.svg';
import RetweetSVG from '@/assets/icons/Retweet.svg';
import ShareSVG from '@/assets/icons/Share.svg';
import { IPostActions } from '@/types/Post';

function onChangeComment() {
  console.log('onChangeComment');
}

function onChangeRetweet() {
  console.log('onChangeRetweet');
}

function onChangeShare() {
  console.log('onChangeShare');
}

const PostActions: FC<IPostActions> = ({
  likeCount,
  likeSelected,
  commentCount,
  commentSelected,
  retweetCount,
  retweetSelected,
  shareCount,
  shareSelected,
}) => {
  const [likeCountButton, setLikeCountButton] = useState(likeCount);
  const [selected, setSelected] = useState(likeSelected || false);

  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'raw',
        justifyContent: 'space-between',
      }}
    >
      <ActionButton
        icon={<CommentSVG />}
        count={commentCount}
        selected={commentSelected}
        onClick={onChangeComment}
      />
      <ActionButton
        icon={<RetweetSVG />}
        count={retweetCount}
        selected={retweetSelected}
        onClick={onChangeRetweet}
      />
      <LikeToggle
        count={likeCountButton}
        selected={selected}
        setLikeButtonCount={setLikeCountButton}
        setSelected={setSelected}
      />
      <ActionButton
        icon={<ShareSVG />}
        count={shareCount}
        selected={shareSelected}
        onClick={onChangeShare}
      />
    </Container>
  );
};

export default PostActions;
