import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { IMakeTweetRequest } from '@/services/types';
import { useMakeTweetMutation } from '@/query/tweet/tweet.mutation';
import InnerTemplate from './templates/InnerTemplate';

interface IInnerTweet {
  avatarUrl: string;
  avatarAlt: string;
}

const InnerTweet: FC<IInnerTweet> = ({ avatarUrl, avatarAlt }) => {
  const { register, handleSubmit, reset } = useForm<IMakeTweetRequest>();
  const { mutateAsync: mutateMakeTweet } = useMakeTweetMutation();

  const onSubmit = (requestData: IMakeTweetRequest) => {
    mutateMakeTweet(requestData);

    reset();
  };

  return (
    <InnerTemplate
      avatarUrl={avatarUrl}
      avatarAlt={avatarAlt}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
};

export default InnerTweet;
