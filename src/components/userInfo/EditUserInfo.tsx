import { useGetProfileDataByIdMutation, useEditProfileBioMutation, useMakeAvatarMutation } from '@/query/profile/profile.mutation';
import { useGetProfileAvatarQuery, useGetProfileDataQuery } from '@/query/profile/profile.query';
import { IChangeInfoRequest } from '@/services/types';
import React, { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import EditUserInfoTemplate from './templates/EditUserInfoTemplate'

interface IEditUserInfo {
  openEditProfile: boolean
  setOpenEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditUserInfo: FC<IEditUserInfo> = ({
  openEditProfile,
  setOpenEditProfile,
}) => {
  const {
    register: changeInfoRegister,
    handleSubmit: changeInfoHandleSubmitForm,
    reset: changeInfoResetForm,
  } = useForm<IChangeInfoRequest>()

  const { data: profileData } = useGetProfileDataQuery();
  const { mutateAsync: getProfileDataById } = useGetProfileDataByIdMutation()
  const { mutateAsync: mutateEditProfileBio } = useEditProfileBioMutation()
  const { mutateAsync: mutateMakeAvatar } = useMakeAvatarMutation()


  const requestEditProfile: SubmitHandler<IChangeInfoRequest> = async (value: IChangeInfoRequest) => {
    const pathId = await getProfileDataById(profileData.email).then((response: string) => { return (response) })
    mutateEditProfileBio({ bioData: value, pathId: pathId })
  }

  const onSubmit = () => {
    changeInfoHandleSubmitForm(requestEditProfile)()
    changeInfoResetForm()

  }

  return (
    <EditUserInfoTemplate
      openEditProfile={openEditProfile}
      setOpenEditProfile={setOpenEditProfile}
      onSubmit={onSubmit}
      changeInfoRegister={changeInfoRegister}
    />
  )
}

export default EditUserInfo