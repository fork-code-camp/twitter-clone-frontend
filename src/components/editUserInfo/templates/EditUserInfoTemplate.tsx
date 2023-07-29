import EditProfileFormTemplate from '@/components/editUserInfo/templates/EditProfileFormTemplate'
import { IChangeInfoRequest } from '@/services/types'
import { Container, Box } from '@mui/material'
import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'
import PopupTemplate from '../../popups/templates/PopupTemplate'
import EditAvatar from '../../userInfo/EditAvatar'
import EditBanner from '../../userInfo/EditBanner'

interface IEditUserInfoTemplate {
  openEditProfile: boolean
  setOpenEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void
  changeInfoRegister: UseFormRegister<IChangeInfoRequest>;
}


const EditUserInfoTemplate: FC<IEditUserInfoTemplate> = ({
  openEditProfile,
  setOpenEditProfile,
  onSubmit,
  changeInfoRegister,

}) => {

  return (
    <PopupTemplate
      title="Edit profile"
      openPopup={openEditProfile}
      setOpenPopup={setOpenEditProfile}
      onSubmit={onSubmit}
    >
      <Container disableGutters sx={{ width: { xs: '300px', sm: '600px' }, height: '100%' }}>
        <EditBanner />
        <Box p={2}>
          <EditAvatar />
        </Box>
        <Box p={2}>
          <EditProfileFormTemplate changeInfoRegister={changeInfoRegister} />
        </Box>
      </Container>
    </PopupTemplate>
  )
}

export default EditUserInfoTemplate
