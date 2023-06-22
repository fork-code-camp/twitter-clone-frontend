import React, { FC } from 'react';
import MoreActionButtonTemplate from './templates/MoreActionButtonTemplate';
import { useDeleteTweetMutation } from '@/services/Query/tweet/tweet.mutation';

interface IMoreActionButton {
  id: string;
}
const MoreActionButton: FC<IMoreActionButton> = ({ id }) => {
  const { mutateAsync: mutateDeleteTweet } = useDeleteTweetMutation();

  const onDelete = async () => {
    await mutateDeleteTweet(Number(id));
  };

  return <MoreActionButtonTemplate onDelete={onDelete} />;
};

export default MoreActionButton;
