import {
  getProfileAvatar,
  getProfileData,
  getUsersList,
} from '@/services/profileService/profileService'
import { ISearchQueryData } from '@/services/types'

import { useQuery } from 'react-query'

const profileConfig = {
  getProfileAvatar: {
    key: 'geProfileAvatar',
    request: async () => {
      const response = await getProfileAvatar()
      return response.data
    },
  },
  getProfileData: {
    key: 'getProfileData',
    request: async () => {
      const response = await getProfileData()
      return response.data
    },
  },
}

export const useGetSearchUsersListQuery = (
  searchQueryData: ISearchQueryData
) => {
  return useQuery({
    queryKey: ['getSearchUsersList', searchQueryData],
    queryFn: async () => {
      const response = await getUsersList(searchQueryData)
      return response.data
    },
    keepPreviousData: true,
    enabled: searchQueryData !== null,
    onError(error) {
      console.error('searchQueryData error', error)
    },
  })
}

export const useGetProfileAvatarQuery = () => {
  const { getProfileAvatar: config } = profileConfig

  const state = useQuery(config.key, config.request, {
    onSuccess() {
      console.log('/api/v1/profiles/images/avatar received successfully')
    },
    onError() {
      console.error('/api/v1/profiles/images/avatar ERROR')
    },
  })
  return state
}

export const useGetProfileDataQuery = () => {
  const { getProfileData: config } = profileConfig

  const state = useQuery(config.key, config.request, {
    onSuccess() {
      console.log('/api/v1/profiles/me received successfully')
    },
    onError() {
      console.error('/api/v1/profiles/me ERROR')
    },
  })
  return state
}
