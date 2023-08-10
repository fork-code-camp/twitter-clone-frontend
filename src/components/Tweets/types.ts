import { IUserInfoData } from '@/query/profile/types'

export type ITweet = {
  avatarUrl: string | null
  avatarAlt: string | null
  username: string
  userTag: string
  creationDate: number
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
  profile: IUserInfoData
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
  profile: IUserInfoData
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
  profile: IUserInfoData
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
  replyAvatarUrl: string | null
  replyAvatarAlt: string | null
  replyUsername: string
  replyUserTag: string
  replycreationDate: number
} & ITweet
// export { IUserInfoData }
