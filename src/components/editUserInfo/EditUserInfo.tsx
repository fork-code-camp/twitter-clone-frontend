import React, { FC } from 'react'
import { useEditProfileBioMutation } from '@/query/profile/profile.mutation';
import { useForm, SubmitHandler } from 'react-hook-form';
import EditUserInfoTemplate from './templates/EditUserInfoTemplate'
import { useGetProfilePathIdByEmailQuery } from '@/query/profile/pathId.query';
import { useGetCurrentProfileDataQuery } from '@/query/profile/currentBioData.query';
import { IChangeInfoRequest } from '@/services/types';

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

  const { data: profileData } = useGetCurrentProfileDataQuery(); //current bio data from JWT
  const { data: pathId } = useGetProfilePathIdByEmailQuery(profileData.email) //pathId from email
  const { mutateAsync: mutateEditProfileBio } = useEditProfileBioMutation() //edit current profile biography


  const requestEditProfile: SubmitHandler<IChangeInfoRequest> = async (value: IChangeInfoRequest) => {
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