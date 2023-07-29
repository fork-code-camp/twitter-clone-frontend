import React from 'react';
import UserInfoTemplate from './templates/UserInfoTemplate';
import {
  useGetProfileDataQuery,
} from '@/query/profile/profile.query';
import {
  useGetProfileAvatarQuery,
} from '@/query/profile/avatar.query';

const UserInfo = () => {
  const { data: avatarUrl } = useGetProfileAvatarQuery();
  const { data: profileData } = useGetProfileDataQuery();

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
