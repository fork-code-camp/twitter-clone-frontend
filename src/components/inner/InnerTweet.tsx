import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IAddTweetRequest } from '@/services/types';
import { useAddTweetMutation } from '@/query/tweet/addTweet.mutation';
import InnerTemplate from './templates/InnerTemplate';

interface IInnerTweet {
  avatarUrl: string;
  avatarAlt: string;
}

const InnerTweet: FC<IInnerTweet> = ({ avatarUrl, avatarAlt }) => {
  const { register, handleSubmit, reset } = useForm<IAddTweetRequest>();
  const { mutateAsync, isSuccess } = useAddTweetMutation();

  const onSubmit = async (requestData: IAddTweetRequest) => {
    await mutateAsync(requestData);
  };

  useEffect(()=>{ reset() },[isSuccess, reset])

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
