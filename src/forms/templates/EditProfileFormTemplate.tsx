import { IChangeInfoRequest } from '@/services/types'
import { Container, TextField } from '@mui/material'
import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface IEditProfileFormTemplate {
  changeInfoRegister: UseFormRegister<IChangeInfoRequest>
}
const EditProfileFormTemplate: FC<IEditProfileFormTemplate> = ({
  changeInfoRegister,
}) => {
  return (
    <Container
      disableGutters
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <TextField
        {...changeInfoRegister('username')}
        id="username"
        label="Username"
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...changeInfoRegister('bio')}
        id="bio"
        label="Bio"
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...changeInfoRegister('location')}
        id="location"
        label="Location"
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...changeInfoRegister('website')}
        id="website"
        label="Website"
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...changeInfoRegister('birthDate')}
        id="birthDate"
        label="Birth Date"
        type="text"
        variant="outlined"
        fullWidth
      />
    </Container>
  )
}

export default EditProfileFormTemplate
