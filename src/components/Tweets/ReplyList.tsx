import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import Reply from './Reply';
import { IDataReplies, IDataTweet } from './types';

const ReplyList: FC<IDataReplies> = ({ replies }, index) => {
  console.log(replies);

  return (
    <Container disableGutters>
      {replies.map((reply: IDataTweet) => (
        <Box key={reply.id}>
          {reply.replyTo && (
            <Reply
              {...reply}
              tweetImg={reply.mediaUrls && reply.mediaUrls[0]}
              tweetAlt={reply.mediaUrls && reply.mediaUrls[0]}
              replyTweetImg={reply.replyTo.mediaUrls && reply.replyTo.mediaUrls[0]}
              replyTweetAlt={reply.replyTo.mediaUrls && reply.replyTo.mediaUrls[0]}
              replyId={reply.replyTo.id}
              replyIsLiked={reply.replyTo.isLiked}
              replyIsRetweeted={reply.replyTo.isRetweeted}
              replyIsBelongs={reply.replyTo.isBelongs}
              replyProfile={reply.replyTo.profile}
              replycreationDate={reply.replyTo.creationDate}
              replyTweetText={reply.replyTo.text}
              replyLikes={reply.replyTo.likes}
              replyReplies={reply.replyTo.replies}
              replyReplyTo={reply.replyTo.replyTo}
              replyRetweets={reply.replyTo.retweets}
              replyRetweetTo={reply.replyTo.retweetTo}
              replyViews={reply.replyTo.views}
            />
          )}
          {replies && replies.length - 1 != index && <UnderLine />}
        </Box>
      ))}
    </Container>
  );
};

export default ReplyList;
