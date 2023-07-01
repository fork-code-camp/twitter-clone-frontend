import api from '@/api';
import { PROFILE_AVATAR_GET, PROFILE_GET } from '../config';

export const getProfileAvatar = async () => {
  const response = await api.get(PROFILE_AVATAR_GET);
  return response;
};

export const getProfileData = async () => {
  const response = await api.get(PROFILE_GET);
  return response;
};
