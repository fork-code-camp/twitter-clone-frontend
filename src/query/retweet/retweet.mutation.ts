import {
  deleteRetweet,
  makeRetweet,
} from '@/services/tweetService/retweetController'
import { useMutation, useQueryClient } from 'react-query'

const retweetConfig = {
  makeRetweet: {
    key: 'makeRetweet',
    request: async (params: number) => {
      const response = await makeRetweet(params)
      return response
    },
  },
  deleteRetweet: {
    key: 'deleteRetweet',
    request: async (params: number) => {
      const response = await deleteRetweet(params)
      return response
    },
  },
}

export const useMakeRetweetMutation = () => {
  const queryClient = useQueryClient()

  const { makeRetweet: config } = retweetConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      queryClient.invalidateQueries()
      console.log('ретвит сделан', data)
    },
  })

  return state
}
export const useDeleteRetweetMutation = () => {
  const { deleteRetweet: config } = retweetConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('ретвит удален', data)
    },
  })

  return state
}
