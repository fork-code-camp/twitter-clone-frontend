export type ITweet = {
  avatarUrl: string
  avatarAlt: string
  username: string
  userTag: string
  userPassedTime: number
} & ITweetContentTemplate &
  ITweetWidgetsTemplate

export type ITweetContentTemplate = {
  tweetText?: string
  tweetImg?: string
  tweetAlt?: string
}

export type ITweetWidgetsTemplate = {
  id: number
  isLiked: boolean
  isRetweeted: boolean
  likes: number
  replies: number
  replyTo: null | IDataReplyTo
  retweets: number
  retweetTo: IDataRetweetTo | null
  views: number
}

export type IDataTweets = {
  tweets: IDataTweet[]
}

export type IDataTweet = {
  creationDate: string
  id: number
  isLiked: boolean
  isRetweeted: boolean
  likes: number
  mediaUrls?: string
  profile: IDataProfile
  quoteTo: null
  replies: number
  replyTo: null | IDataReplyTo
  retweetTo: null | IDataRetweetTo
  retweets: number
  text?: string
  views: number
}

export type IDataRetweetTo = {
  creationDate: string
  id: number
  isLiked: boolean
  isRetweeted: boolean
  likes: number
  mediaUrls: string[]
  profile: IDataProfile
  quoteTo: null
  replies: number
  replyTo: null | IDataReplyTo
  retweetTo: null | IDataRetweetTo
  retweets: number
  text: string
  views: number
}

export type IDataReplyTo = {
  creationDate: string
  id: number
  isLiked: boolean
  isRetweeted: boolean
  likes: number
  mediaUrls: string[]
  profile: IDataProfile
  quoteTo: null
  replies: number
  replyTo: null | IDataReplyTo
  retweetTo: null | IDataRetweetTo
  retweets: number
  text: string
  views: number
}

export type IDataReply = {
  replyId: number
  replyIsLiked: boolean
  replyIsRetweeted: boolean
  replyLikes: number
  replyReplies: number
  replyReplyTo: null | IDataReplyTo
  replyRetweets: number
  replyRetweetTo: null | IDataRetweetTo
  replyViews: number
  replyTweetText?: string
  replyTweetImg?: string
  replyTweetAlt?: string
  replyAvatarUrl: string
  replyAvatarAlt: string
  replyUsername: string
  replyUserTag: string
  replyUserPassedTime: number
} & ITweet

type IDataProfile = {
  profileId: string
  username: string
  email: string
  followers: number
  followees: number
  joinDate: string
  bio: string
  location: string
  website: string
  birthDate: string
  avatarUrl: string
  bannerUrl: string
}
