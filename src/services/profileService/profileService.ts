import api from '@/api'
import {
  PROFILE_AVATAR_GET,
  PROFILE_AVATAR_POST,
  PROFILE_ME,
  PROFILE_PATCH,
  PROFILE_PATH_ID,
} from '../config'
import { IChangeInfoRequest } from '../types'

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

export const getProfileId = async (email: string) => {
  console.log(PROFILE_PATH_ID + '/' + email)

  const response = await api.get(PROFILE_PATH_ID + '/' + email)
  return response
}

export const makeAvatar = async (formData: FormData) => {
  const response = await api.post(PROFILE_AVATAR_POST, formData)
  return response
}
