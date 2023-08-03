import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { Box, Container, TextField, Typography } from '@mui/material'
import BirthDatePicker from './BirthDatePicker'
import { IChangeInfoRequest } from '@/services/types'
import { IUserInfoData } from '@/query/profile/types';

interface IEditUserInfoForm {
  registerEditForm: UseFormRegister<IChangeInfoRequest>
  userInfoData: IUserInfoData
  control: any
}

const EditUserInfoForm: FC<IEditUserInfoForm> = ({ control, registerEditForm, userInfoData }) => {

  return (
    <Container
      disableGutters
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        gap: 2,
      }}
    >
      <TextField
        {...registerEditForm('username')}
        id="username"
        label={'Username'}
        defaultValue={userInfoData.username}
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...registerEditForm('bio')}
        id="bio"
        label={'Bio'}
        defaultValue={userInfoData.bio}
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...registerEditForm('location')}
        id="location"
        label={'Location'}
        defaultValue={userInfoData.location}
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...registerEditForm('website')}
        id="website"
        label={'Website'}
        defaultValue={userInfoData.website}
        type="text"
        variant="outlined"
        fullWidth
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography>Birth Date</Typography>
        <BirthDatePicker control={control} registerEditForm={registerEditForm}  />
      </Box>
    </Container>
  )
}

export default EditUserInfoForm
