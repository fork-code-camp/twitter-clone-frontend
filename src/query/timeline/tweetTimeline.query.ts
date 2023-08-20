import {
  getHomeTweets,
  getUserRepliesTweets,
  getUserTweets,
  getUserTweetsById,
} from '@/services/timelineService/timelineService'
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

  const state = useQuery(config.key, config.request, {})
  return state
}

export const useGetTweetUserRepliesQuery = () => {
  const { getUserRepliesTweets: config } = tweetConfig

  const state = useQuery(config.key, config.request, {})
  return state
}

export const useGetUserTweetsByIdQuery = (profileId?: string) => {
  return useQuery({
    queryKey: ['getUserTweetsById', profileId],
    queryFn: async () => {
      if(profileId){
        const response = await getUserTweetsById(profileId)
        return response.data
      }
    },
    keepPreviousData: true,
    enabled: profileId !== null,
    onError(error) {
      console.error('getUserTweetsById error', error)
    },
  })
}