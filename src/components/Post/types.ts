export type ISinglePost = {
  id: string;
  avatarUrl: string;
  avatarAlt: string;
  username: string;
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
  replyCount: number;
  replyTo: string | null;
  retweetCount: number;
  retweetTo: string | null;
  viewsCount: number;
};

