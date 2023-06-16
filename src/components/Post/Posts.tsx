import React, { FC } from 'react';
import SinglePost from '@/components/Post/SinglePost';
import { Box, Container } from '@mui/material';
import UnderLine from '@/common/UnderLine';
// import { ISinglePost } from '../../types/Post';

// интерфейс для полных данных с бэкенда
// interface IPosts {
//   posts: ISinglePost[];
// }

interface IDraftPost {
  text: string;
  username: string;
  creationDate: string;
  likes: number;
}

interface IPosts {
  posts: IDraftPost[];
}

const Posts: FC<IPosts> = ({ posts }, index) => {
  return (
    <Container disableGutters>
      {posts &&
        posts.map((post: IDraftPost) => (
          <Box key={post.creationDate}>
            <SinglePost
              id={post.creationDate}
              avatarImg={require('../../temp/BlankAvatar.jpg')}
              avatarAlt="avatarAlt"
              userName={post.username}
              userTag="usertest"
              userPassedTime={Number(new Date(post.creationDate))}
              postText={post.text}
              postImg={require('../../temp/testPost.jpg')}
              postAlt="postAlt"
              likeCount={post.likes}
              likeIsSelected={false}
              commentCount={99}
              retweetCount={55}
              shareCount={7}
            />
            {posts && posts.length - 1 != index && <UnderLine />}
          </Box>
        ))}
    </Container>
  );
};

export default Posts;

{
  /* <SinglePost
  key={post.id}
  id={post.id}
  avatarImg={post.avatarImg}
  avatarAlt={post.avatarAlt}
  userName={post.userName}
  userTag={post.userTag}
  userPassedTime={post.userPassedTime}
  postText={post.postText}
  postImg={post.postImg}
  postAlt={post.postAlt}
  likeCount={post.likeCount}
  likeIsSelected={post.likeIsSelected}
  commentCount={post.commentCount}
  retweetCount={post.retweetCount}
  shareCount={post.shareCount}
/> */
}
