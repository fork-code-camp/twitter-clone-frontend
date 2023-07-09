import api from '../../api/index'
import {
  RETWEET_DELETE,
  RETWEET_GET,
  RETWEET_LIST_GET,
  RETWEET_POST,
} from '../config'

export const setRetweet = async (tweetId: number) => {
  console.log(tweetId, 'tweetId: ' + tweetId)

  const response = await api.post(`${RETWEET_POST}/${tweetId}`)
  console.log(response)

  return response
}

export const getRetweet = async () => {
  const response = await api.get(RETWEET_GET)
  return response
}

export const getRetweetList = async () => {
  const response = await api.get(RETWEET_LIST_GET)
  return response
}

export const deleteRetweet = async (retweetData: number) => {
  console.log(retweetData, '-')

  const response = await api.delete(`${RETWEET_DELETE}/${retweetData}`)
  return response
}
