import { IChangeInfoRequest } from '@/services/types'
import { Container, TextField, Tooltip } from '@mui/material'
import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'
import MyInputMask from '../../ui/input/MyInputMask'

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
      <Tooltip title="YYYY-MM-DD" placement="bottom-start" arrow>
        <MyInputMask
          {...changeInfoRegister('birthDate')}
          mask="9999-99-99"
          // label="Номер карты"
          id="birthDate"
          label="Birth Date"
          type="text"
          variant="outlined"
          fullWidth
        />

      </Tooltip>
    </Container>
  )
}

export default EditProfileFormTemplate
