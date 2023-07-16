import EditProfileFormTemplate from '@/forms/templates/EditProfileFormTemplate'
import { useEditProfileBioMutation, useGetPathIdMutation } from '@/query/profile/profile.mutation'
import { useGetProfileAvatarQuery, useGetProfileDataQuery } from '@/query/profile/profile.query'
import { IChangeInfoRequest } from '@/services/types'
import { Box, IconButton, useTheme } from '@mui/material'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Avatar from '../avatar/Avatar'
import PopupTemplate from './templates/PopupTemplate'
import Banner from '../banner/Banner'
import AddPhotoSVG from '@/assets/icons/AddPhoto.svg';

interface IPopupEditProfile {
  openEditProfile: boolean
  setOpenEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
}
const PopupEditProfile: FC<IPopupEditProfile> = ({
  openEditProfile,
  setOpenEditProfile,
}) => {
  const theme = useTheme()

  const {
    register: changeInfoRegister,
    handleSubmit: changeInfoHandleSubmitForm,
    reset: changeInfoResetForm,
  } = useForm<IChangeInfoRequest>()

  const { mutateAsync: mutateEditProfileBio } = useEditProfileBioMutation()
  const { data: avatarUrl } = useGetProfileAvatarQuery()
  const { data: profileData } = useGetProfileDataQuery();
  const { mutateAsync: mutateGetPathId } = useGetPathIdMutation()


  const requestEditProfile: SubmitHandler<IChangeInfoRequest> = async (value: IChangeInfoRequest) => {
    const pathId = await mutateGetPathId(profileData.username).then((response: string) => { return (response) })
    mutateEditProfileBio({ bioData: value, pathId: pathId })
  }

  const onSubmit = () => {
    changeInfoHandleSubmitForm(requestEditProfile)()
    changeInfoResetForm()
  }

  const onClickBanner = () => {
    console.log('edit banner click');
  }

  const onClickAvatar = () => {
    console.log('edit avatar click');
  }

  const styleAddIcon = {
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    background: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '50%',
    ':hover': {
      background: 'rgba(0, 0, 0, 0.2)',
    },
  }

  return (
    <PopupTemplate
      title="Edit profile"
      openPopup={openEditProfile}
      setOpenPopup={setOpenEditProfile}
      onSubmit={onSubmit}
    >
      <Box sx={{ width: { xs: '300px', sm: '600px' }, height: '100%' }}>
        <Box width='100%' height='200px' position='relative'>
          <IconButton
            onClick={() => { onClickBanner() }}
            sx={styleAddIcon}>
            <AddPhotoSVG width='25px' height='25px' fill={theme.palette.primary.light} />
          </IconButton>
          <Box sx={{ width: '100%', height: '200px', position: 'absolute' }}>
            <Banner />
          </Box>
        </Box>
        <Box p={2}>
          <Box marginTop='-75px' position='relative' width='fit-content'>
            <IconButton
              onClick={() => { onClickAvatar() }}
              sx={styleAddIcon}>
              <AddPhotoSVG width='25px' height='25px' fill={theme.palette.primary.light} />
            </IconButton>
            <Avatar width={120} height={120} img={avatarUrl} alt={avatarUrl} />
          </Box>

        </Box>
        <Box p={2}>
          <EditProfileFormTemplate changeInfoRegister={changeInfoRegister} />
        </Box>
      </Box>
    </PopupTemplate>
  )
}

export default PopupEditProfile
