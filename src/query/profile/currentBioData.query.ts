import { getProfileData } from "@/services/profileService/profileService"
import { useQuery } from "react-query"

const profileConfig = {
  getProfileData: {
    key: 'getProfileData',
    request: async () => {
      const response = await getProfileData()
      return response.data
    },
  },
}

export const useGetCurrentProfileDataQuery = () => {
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