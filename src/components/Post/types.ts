export type ISinglePost = {
  id: number;
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
  retweetTo?: IRetweetTo;
  viewsCount: number;
};

export type IPost = {
  id: number;
  replyTo: null;
  text?: string;
  mediaUrls?: string;
  quoteTo: null;
  retweets: number;
  replies: number;
  likes: number;
  views: number;
  creationDate: string;
  retweetTo: IRetweetTo;
  profile: Profile;
};

type IRetweetTo = {
  id: number;
  replyTo: null;
  retweetTo: null;
  profile: Profile;
  text: string;
  mediaUrls: string[];
  quoteTo: null;
  retweets: number;
  replies: number;
  likes: number;
  views: number;
  creationDate: string;
}
type Profile = {
  profileId: string;
  username: string;
  email: string;
  followers: number;
  followees: number;
  joinDate: string;
  bio: null;
  location: null;
  website: null;
  birthDate: null;
  avatarUrl: string;
  bannerUrl: null;
};
