import React, { FC } from 'react';
import SinglePost from '@/components/Post/SinglePost';
import { Box, Container } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import { ISinglePost } from './types';

interface IPosts {
  posts: ISinglePost[];
}

const Posts: FC<IPosts> = ({ posts }, index) => {
  return (
    <Container disableGutters>
      {posts &&
        posts.map((post: ISinglePost) => (
          <Box key={post.id}>
            <SinglePost
              id={post.id}
              avatarUrl={post.profile.avatarUrl}
              avatarAlt={post.profile.avatarUrl}
              username={post.profile.username}
              userTag={post.profile.username}
              userPassedTime={Number(new Date(post.creationDate))}
              postText={post.text}
              postImg={post.mediaUrls[0]}
              postAlt={post.mediaUrls[0]}
              likeCount={post.likes}
              likeIsSelected={false}
              replyCount={post.replies}
              replyTo={post.replyTo}
              retweetCount={post.retweets}
              retweetTo={post.retweetTo}
              viewsCount={post.views}
            />
            {posts && posts.length - 1 != index && <UnderLine />}
          </Box>
        ))}
    </Container>
  );
};

export default Posts;

