import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { IAddTweetRequest } from '@/services/types';
import { useMakeReplyMutation } from '@/query/reply/reply.mutation';
import InnerTemplate from './templates/InnerTemplate';

interface IInnerReply {
  replyToId: number;
  onSubmitReply: React.Dispatch<React.SetStateAction<boolean>>;
}

const InnerReply: FC<IInnerReply> = ({ replyToId, onSubmitReply }) => {
  const { register, handleSubmit, reset } = useForm<IAddTweetRequest>();

  const { mutateAsync: mutateMakeReply } = useMakeReplyMutation();

  const onSubmit = (requestData: IAddTweetRequest) => {
    mutateMakeReply({ requestData, replyToId });
    onSubmitReply(false)
    reset();
  };

  return (
    <InnerTemplate
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
};

export default InnerReply;
