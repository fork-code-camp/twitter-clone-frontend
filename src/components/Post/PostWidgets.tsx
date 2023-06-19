import React, { FC, useState } from 'react';
import { Container } from '@mui/material';
import ButtonLike from '../buttons/ButtonLike';
import ButtonWidget from '../buttons/ButtonWidget';
import ReplySVG from '@/assets/icons/Reply.svg';
import RetweetSVG from '@/assets/icons/Retweet.svg';
import ShareSVG from '@/assets/icons/Share.svg';
import ViewsSVG from '@/assets/icons/Views.svg';
import { IPostWidgets } from '@/components/Post/types';

const PostWidgets: FC<IPostWidgets> = ({
  likeCount,
  likeIsSelected,
  replyCount,
  replyTo,
  retweetCount,
  retweetTo,
  viewsCount,
}) => {
  const [likeCountButton, setLikeCountButton] = useState(likeCount);
  const [selected, setSelected] = useState(likeIsSelected || false);

  const onChangeReply = () => {
    console.log('onChangeReply');
  };

  const onChangeRetweet = () => {
    console.log('onChangeRetweet');
  };

  const onClickLike = () => {
    console.log('onClickLike: ', likeCountButton, selected);
  };

  const onChangeView = () => {
    console.log('onChangeView');
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
        icon={<ReplySVG />}
        count={replyCount}
        onClick={onChangeReply}
        widgetTo={replyTo}
      />
      <ButtonWidget
        icon={<RetweetSVG />}
        count={retweetCount}
        onClick={onChangeRetweet}
        widgetTo={retweetTo}
      />
      <ButtonLike
        count={likeCountButton}
        selected={selected}
        setButtonLikeCount={setLikeCountButton}
        setSelected={setSelected}
        onClick={onClickLike}
      />
      <ButtonWidget
        icon={<ViewsSVG />}
        count={viewsCount}
        // count={shareCount}
        onClick={onChangeView}
      />
      <ButtonWidget
        icon={<ShareSVG />}
        // count={shareCount}
        onClick={onChangeShare}
      />
    </Container>
  );
};

export default PostWidgets;
