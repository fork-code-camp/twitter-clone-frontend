import React, { FC, useState } from 'react';
import { Container } from '@mui/material';
import ButtonLike from '../../buttons/ButtonLike';
import ButtonWidget from '../../buttons/ButtonWidget';
import { ITweetWidgets } from '@/components/tweets/types';
import ButtonRetweet from '@/components/buttons/ButtonRetweet';
import ReplySVG from '@/assets/icons/Reply.svg';
import ShareSVG from '@/assets/icons/Share.svg';
import ViewsSVG from '@/assets/icons/Views.svg';

const TweetWidgets: FC<ITweetWidgets> = ({
  id,
  likes,
  isLiked,
  isRetweeted,
  replies,
  replyTo,
  retweets,
  retweetTo,
  viewsCount,
}) => {

  const onChangeReply = () => {
    console.log('onChangeReply');
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
        count={replies}
        onClick={onChangeReply}
        widgetTo={replyTo}
      />
      <ButtonRetweet
        id={id}
        isRetweeted={isRetweeted}
        count={retweets}
        retweetTo={retweetTo}
      />
      <ButtonLike
        id={id}
        likes={likes}
        isLiked={isLiked}
      />
      <ButtonWidget
        icon={<ViewsSVG />}
        count={viewsCount}
        onClick={onChangeView}
      />
      <ButtonWidget icon={<ShareSVG />} onClick={onChangeShare} />
    </Container>
  );
};

export default TweetWidgets;
