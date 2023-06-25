import api from "@/api";
import { PROFILE_AVATAR_GET } from "./config";

export const getProfileAvatar = async () => {
  const response = await api.get(PROFILE_AVATAR_GET);
  return response;
};
