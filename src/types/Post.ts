export type IPost = {
  id: string;
  avatarImg: string;
  avatarAlt: string;
  userName: string;
  userTag: string;
  userPassedTime: number;
} & IPostContent;

export type IPostContent = {
  postText?: string;
  postImg?: string;
  postAlt?: string;
} & IPostWidgets;

export type IPostWidgets = {
  likeCount: number;
  likeIsSelected?: boolean;
  commentCount: number;
  retweetCount: number;
  shareCount: number;
};