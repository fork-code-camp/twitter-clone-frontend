import React, { FC } from 'react';
import Post from '@/components/Post/Post';
// import { IPost } from '../../types/Post';

// интерфейс для полных данных с бэкенда
// interface IPostList {
//   posts: IPost[];
// }

interface IDraftPost {
  text: string;
  username: string;
  creationDate: string;
  likes: number;
}

interface IDraftPostList {
  posts: IDraftPost[];
}

const PostList: FC<IDraftPostList> = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post: IDraftPost) => (
          <Post
            key={post.creationDate}
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
        ))}
    </>
  );
};

export default PostList;

{
  /* <Post
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
