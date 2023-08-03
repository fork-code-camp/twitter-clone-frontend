import { getHomeTweets, getUserRepliesTweets, getUserTweets } from '@/services/timelineService/timelineService'
import { useQuery } from 'react-query'

const tweetConfig = {
  getHomeTweets: {
    key: 'getHomeTweets',
    request: async () => {
      const response = await getHomeTweets()
      return response.data
    },
  },
  getUserTweets: {
    key: 'getUserTweets',
    request: async () => {
      const response = await getUserTweets()
      return response.data
    },
  },
  getUserRepliesTweets: {
    key: 'getUserRepliesTweets',
    request: async () => {
      const response = await getUserRepliesTweets()
      return response.data
    },
  },
}

export const useGetTweetHomeQuery = () => {
  const { getHomeTweets: config } = tweetConfig

  const state = useQuery(config.key, config.request, {
    onSuccess() {
      console.log('ретвиты (фоловнутых) получены')
    },
  })
  return state
}

export const useGetUserTweetsQuery = () => {
  const { getUserTweets: config } = tweetConfig

  const state = useQuery(config.key, config.request, {
    onSuccess() {
      console.log('твиты (свои+фолов+реплаи) получены')
    },
  })
  return state
}

export const useGetTweetUserRepliesQuery = () => {
  const { getUserRepliesTweets: config } = tweetConfig

  const state = useQuery(config.key, config.request, {
    onSuccess() {
      console.log('твиты (реплаи) получены')
    },
  })
  return state
}
