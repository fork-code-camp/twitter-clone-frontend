import React, { FC } from 'react';
import MoreActionButtonTemplate from './templates/MoreActionButtonTemplate';
import { useDeleteTweetMutation } from '@/query/tweet/tweet.mutation';

interface IMoreActionButton {
  id: number;
}
const MoreActionButton: FC<IMoreActionButton> = ({ id }) => {
  const { mutateAsync: mutateDeleteTweet } = useDeleteTweetMutation();

  const onDelete = async () => {
    await mutateDeleteTweet(id);
  };

  return <MoreActionButtonTemplate onDelete={onDelete} />;
};

export default MoreActionButton;
