import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IAddTweetRequest } from '@/services/types';
import { useAddReplyMutation } from '@/query/reply/addReply.mutation';
import InnerTemplate from './templates/InnerTemplate';

interface IInnerReply {
  replyToId: number;
  onSubmitReply: React.Dispatch<React.SetStateAction<boolean>>;
}

const InnerReply: FC<IInnerReply> = ({ replyToId, onSubmitReply }) => {
  const { register, handleSubmit, reset } = useForm<IAddTweetRequest>();

  const { mutateAsync, isSuccess } = useAddReplyMutation();

  const onSubmit = (requestData: IAddTweetRequest) => {
    mutateAsync({ requestData, replyToId });
    onSubmitReply(false)
  };

  useEffect(()=>{ reset() },[isSuccess, reset])

  return (
    <InnerTemplate
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
};

export default InnerReply;
