import api from '@/api'
import {
  PROFILE_AVATAR_GET,
  PROFILE_AVATAR_POST,
  PROFILE_GET,
  PROFILE_ME,
  PROFILE_PATCH,
  PROFILE_DATA_BY_ID,
} from '../config'
import { IChangeInfoRequest, ISearchQueryData } from '../types'

export const getProfileData = async () => {
  const response = await api.get(PROFILE_ME)
  return response
}

export const editProfileBio = async (
  pathId: string,
  infoData: IChangeInfoRequest
) => {
  const response = await api.patch(PROFILE_PATCH + '/' + pathId, infoData)
  return response
}

export const getProfileAvatar = async () => {
  const response = await api.get(PROFILE_AVATAR_GET)
  return response
}

export const getUsersList = async (pageable: ISearchQueryData) => {
  await console.log(pageable)

  const username = await pageable.username
  const size = await pageable.size
  const page = await pageable.page

  const response = await api.get(
    `${PROFILE_GET}/?username=${username}&size=${size}&page=${page}`
  )

  return response
}

export const getProfileDataById = async (email: string) => {
  const response = await api.get(PROFILE_DATA_BY_ID + '/' + email)
  return response
}

export const editAvatar = async (formData: FormData) => {
  const response = await api.post(PROFILE_AVATAR_POST, formData)
  return response
}
