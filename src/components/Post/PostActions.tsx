import React, { FC, useState } from 'react';
import { Container } from '@mui/material';
import LikeToggle from './LikeToggle';
import ActionButton from './ActionButton';
import CommentSVG from '@/assets/Comment.svg';
import RetweetSVG from '@/assets/Retweet.svg';
import ShareSVG from '@/assets/Share.svg';
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
  const [likeToggleCount, setLikeToggleCount] = useState(likeCount);
  const [selectedBtn, setSelectedBtn] = useState(likeSelected || false);

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
        count={likeToggleCount}
        selected={selectedBtn}
        setLikeToggleCount={setLikeToggleCount}
        setSelectedBtn={setSelectedBtn}
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
