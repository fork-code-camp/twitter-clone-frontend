import React, { FC, useState } from 'react';
import { Container } from '@mui/material';
import ButtonLike from '../../buttons/ButtonLike';
import ButtonWidget from '../../buttons/ButtonWidget';
import ReplySVG from '@/assets/icons/Reply.svg';
import RetweetSVG from '@/assets/icons/Retweet.svg';
import ShareSVG from '@/assets/icons/Share.svg';
import ViewsSVG from '@/assets/icons/Views.svg';
import { ITweetWidgets } from '@/components/tweets/types';
import ButtonRetweet from '@/components/buttons/ButtonRetweet';

const TweetWidgets: FC<ITweetWidgets> = ({
  id,
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
      <ButtonRetweet
        id={id}
        icon={<RetweetSVG />}
        count={retweetCount}
        retweetTo={retweetTo}
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
        onClick={onChangeView}
      />
      <ButtonWidget icon={<ShareSVG />} onClick={onChangeShare} />
    </Container>
  );
};

export default TweetWidgets;
