import React from 'react';
import UserInfoTemplate from './template/UserInfoTemplate';
import {
  useGetProfileAvatarQuery,
  useGetProfileDataQuery,
} from '@/query/profile/profile.query';

const UserInfo = () => {
  const { data: avatarUrl } = useGetProfileAvatarQuery();
  const { data: profileData } = useGetProfileDataQuery();
  return (
    <UserInfoTemplate
      username={'Admin'}
      tag={'Admin'}
      bio={'Product Designer'}
      location={'location'}
      joinDate={'joinDate'}
    />
    // <></>
    // <UserInfoTemplate
    //   avatarUrl={avatarUrl}
    //   username={username}
    //   tag={username}
    //   bio={bio}
    //   location={location}
    //   joinDate={joinDate}
    // />
  );
};

export default UserInfo;
