import { getProfileAvatar } from '@/services/profileService';

import { useQuery } from 'react-query';

const profileConfig = {
  geProfileAvatar: {
    key: 'geProfileAvatar',
    request: async () => {
      const response = await getProfileAvatar();
      return response.data;
    },
  },
};

export const useGetProfileAvatarQuery = () => {
  const { geProfileAvatar: config } = profileConfig;

  const state = useQuery(config.key, config.request, {
    onSuccess() {
      console.log('аватар получен');
    },
    onError(error) {
      console.log('аватар ошибка', error);
    },
  });
  return state;
};
