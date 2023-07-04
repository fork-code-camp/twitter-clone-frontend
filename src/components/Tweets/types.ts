export type ISingleTweet = {
  avatarUrl: string;
  avatarAlt: string;
  username: string;
  userTag: string;
  userPassedTime: number;
} & ITweetContent;

export type ITweetContent = {
  tweetText?: string;
  tweetImg?: string;
  tweetAlt?: string;
} & ITweetWidgets;

export type ITweetWidgets = {
  id: number;
  isLiked: boolean;
  isRetweeted: boolean;
  likes: number;
  replies: number;
  replyTo: string | null;
  retweets: number;
  retweetTo: IRetweetTo | null;
  viewsCount: number;
};

export type ITweets = {
  tweets: ITweet[];
};

export type ITweet = {
  creationDate: string;
  id: number;
  isLiked: boolean;
  isRetweeted: boolean;
  // isReplyed: boolean; BACKEND TODO
  likes: number;
  mediaUrls?: string;
  profile: Profile;
  quoteTo: null;
  replies: number;
  replyTo: null;
  retweetTo: IRetweetTo;
  retweets: number;
  text?: string;
  views: number;
};

export type IRetweetTo = {
  creationDate: string;
  id: number;
  isLiked: boolean;
  isRetweeted: boolean;
  likes: number;
  mediaUrls: string[];
  profile: Profile;
  quoteTo: null;
  replies: number;
  replyTo: null;
  retweetTo: null | IRetweetTo;
  retweets: number;
  text: string;
  views: number;
};

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
