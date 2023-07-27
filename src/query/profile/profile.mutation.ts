import {
  makeAvatar,
  editProfileBio,
  getProfileDataById,
} from '@/services/profileService/profileService'
import { IChangeInfoRequest, IMakeAvatarRequest } from '@/services/types'
import { useMutation, useQueryClient } from 'react-query'

type IMakeRequest = {
  requestData: IMakeAvatarRequest
}

type IEditProfileBio = {
  pathId: string
  bioData: IChangeInfoRequest
}

const profileConfig = {
  makeAvatar: {
    key: 'makeAvatar',
    request: async (requestData: IMakeRequest) => {
      const formData = await new FormData()
      await formData.append('file', requestData.files[0])
      const response = await makeAvatar(formData)
      return response.data
    },
  },

  editProfileBio: {
    key: 'editProfileBio',
    request: async (params: IEditProfileBio) => {
      const pathId = params.pathId
      const bioData = params.bioData
      const response = await editProfileBio(pathId, bioData)
      return response
    },
  },

  getProfileDataById: {
    key: 'getProfileDataById',
    request: async (email: string) => {
      const response = await getProfileDataById(email)
      return response.data
    },
  },
}

export const useMakeAvatarMutation = () => {
  const { makeAvatar: config } = profileConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('фото загружено', data)
    },
    onError(error) {
      console.log('фото НЕ загружено', error)
    },
  })
  return state
}

export const useEditProfileBioMutation = () => {
  const queryClient = useQueryClient()

  const { editProfileBio: config } = profileConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      queryClient.invalidateQueries()
      console.log('био-данные обновлены', data)
    },
    onError(error) {
      console.log('био-данные НЕ обновлены, ошибка', error)
    },
  })
  return state
}

export const useGetProfileDataByIdMutation = () => {
  const { getProfileDataById: config } = profileConfig
  const state = useMutation(config.request, {
    onError(error) {
      console.log('ошибка получения pathId', error)
    },
  })
  return state
}
