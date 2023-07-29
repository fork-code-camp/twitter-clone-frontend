import React from 'react';
import UserInfoTemplate from './templates/UserInfoTemplate';
import {
  useGetProfileAvatarQuery,
} from '@/query/profile/avatar.query';
import { useGetCurrentProfileDataQuery } from '@/query/profile/currentBioData.query';

const UserInfo = () => {
  const { data: avatarUrl } = useGetProfileAvatarQuery();
  const { data: profileData } = useGetCurrentProfileDataQuery();

  return (
    <UserInfoTemplate
      avatarUrl={avatarUrl}
      username={profileData && profileData.username}
      tag={profileData && profileData.username}
      bio={profileData?.bio}
      userLocation={profileData?.location}
      joinedDate={profileData?.joinDate}
    />
  );
};

export default UserInfo;
