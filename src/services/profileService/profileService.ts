import api from '@/api'
import {
  PROFILE_AVATAR_GET,
  PROFILE_AVATAR_POST,
  PROFILE_USERS_LIST_GET,
  PROFILE_ME_BIO,
  PROFILE_PATCH,
  PATH_ID_BY_EMAIL_GET,
} from '../config'
import { IChangeInfoRequest, ISearchQueryData } from '../types'

export const getAuthorizedUserData = async () => {
  const response = await api.get(PROFILE_ME_BIO)
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
    `${PROFILE_USERS_LIST_GET}/?username=${username}&size=${size}&page=${page}`
  )

  return response
}

export const getProfilePathIdByEmail = async (email: string) => {
  const response = await api.get(PATH_ID_BY_EMAIL_GET + '/' + email)
  return response
}

export const editAvatar = async (formData: FormData) => {
  const response = await api.post(PROFILE_AVATAR_POST, formData)
  return response
}
