import React, { FC, useState } from 'react';
import { Container } from '@mui/material';
import ButtonLike from '../buttons/ButtonLike';
import ButtonWidget from '../buttons/ButtonWidget';
import CommentSVG from '@/assets/icons/Comment.svg';
import RetweetSVG from '@/assets/icons/Retweet.svg';
import ShareSVG from '@/assets/icons/Share.svg';
import { IPostWidgets } from '@/types/Post';

const PostWidgets: FC<IPostWidgets> = ({
  likeCount,
  likeIsSelected,
  commentCount,
  retweetCount,
  shareCount,
}) => {
  const [likeCountButton, setLikeCountButton] = useState(likeCount);
  const [selected, setSelected] = useState(likeIsSelected || false);

  const onChangeComment = () => {
    console.log('onChangeComment');
  };

  const onChangeRetweet = () => {
    console.log('onChangeRetweet');
  };

  const onClickLike = () => {
    console.log('onClickLike: ', likeCountButton, selected);
  };
  const onChangeShare = () => {
    console.log('onChangeShare');
  };

  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'raw',
        justifyContent: 'space-between',
      }}
    >
      <ButtonWidget
        icon={<CommentSVG />}
        count={commentCount}
        onClick={onChangeComment}
      />
      <ButtonWidget
        icon={<RetweetSVG />}
        count={retweetCount}
        onClick={onChangeRetweet}
      />
      <ButtonLike
        count={likeCountButton}
        selected={selected}
        setButtonLikeCount={setLikeCountButton}
        setSelected={setSelected}
        onClick={onClickLike}
      />
      <ButtonWidget
        icon={<ShareSVG />}
        count={shareCount}
        onClick={onChangeShare}
      />
    </Container>
  );
};

export default PostWidgets;
