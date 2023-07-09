import api from '@/api'
import { REPLIES_GET, REPLIES_POST } from '../config'
import { IDataReplyTo } from '@/components/tweets/types'

export const getReply = async (parentTweetId: number) => {
  const response = await api.get<IDataReplyTo>(
    `${REPLIES_GET}/${parentTweetId}`
  )
  return response
}

export const makeReply = async (formData: FormData, replyToId: number) => {
  const response = await api.post(`${REPLIES_POST}/${replyToId}`, formData)
  return response
}
