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
  likeCount: number;
  likeIsSelected?: boolean;
  replyCount: number;
  replyTo: string | null;
  retweetCount: number;
  retweetTo: IRetweetTo | null;
  viewsCount: number;
};

export type ITweets = {
  tweets: ITweet[];
};

export type ITweet = {
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

export type IRetweetTo = {
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
