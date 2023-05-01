export interface IPost {
  id: string;
  avatarImg: string;
  avatarAlt: string;
  userName: string;
  userTag: string;
  userPassedTime: string;
  postText?: string;
  postImg?: string;
  postAlt?: string;
  likeCount: number;
  commentCount: number;
  retweetCount: number;
  shareCount: number;
  likeSelected?: boolean;
  commentSelected?: boolean;
  retweetSelected?: boolean;
  shareSelected?: boolean;
}

export interface IPostContent {
  text?: string;
  img?: string;
  alt?: string;
  likeCount: number;
  likeSelected?: boolean;
  commentCount: number;
  commentSelected?: boolean;
  retweetCount: number;
  retweetSelected?: boolean;
  shareCount: number;
  shareSelected?: boolean;
};

export interface IPostActions {
  likeCount: number;
  likeSelected?: boolean;
  onChangeLike: (likeCount: number) => void;
  commentCount: number;
  commentSelected?: boolean;
  onChangeComment: () => void;
  retweetCount: number;
  retweetSelected?: boolean;
  onChangeRetweet: () => void;
  shareCount: number;
  shareSelected?: boolean;
  onChangeShare: () => void;
};