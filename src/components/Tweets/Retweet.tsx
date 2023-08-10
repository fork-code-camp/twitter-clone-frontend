import React, { FC } from 'react';
import { ITweet } from '@/components/tweets/types';
import RetweetTemplate from './templates/RetweetTemplate';
import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query';

const Retweet: FC<ITweet> = ({
  id,
  isLiked,
  isRetweeted,
  avatarUrl,
  avatarAlt,
  username,
  userTag,
  creationDate,
  tweetText,
  tweetImg,
  tweetAlt,
  likes,
  replies,
  replyTo,
  retweets,
  retweetTo,
  views,
}) => {
  const { data: profileData } = useGetAuthorizedUserDataQuery();
  return (
    <RetweetTemplate
      id={id}
      isLiked={isLiked}
      isRetweeted={isRetweeted}
      tweetText={tweetText}
      tweetImg={tweetImg}
      tweetAlt={tweetAlt}
      likes={likes}
      replies={replies}
      replyTo={replyTo}
      retweets={retweets}
      retweetTo={retweetTo}
      views={views}
      avatarUrl={avatarUrl}
      avatarAlt={avatarAlt}
      username={username}
      currentUsername={profileData && profileData.username}
      userTag={userTag}
      creationDate={creationDate}
    />
  );
};

export default Retweet;
