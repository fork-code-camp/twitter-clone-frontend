import React, { FC } from 'react'
import { IChangeInfoRequest } from '@/services/types'
import { Box, Container, TextField, Typography } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'
import { useGetCurrentProfileDataQuery } from '@/query/profile/currentBioData.query'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

interface IEditProfileFormTemplate {
  changeInfoRegister: UseFormRegister<IChangeInfoRequest>
}

const EditProfileFormTemplate: FC<IEditProfileFormTemplate> = ({
  changeInfoRegister,
}) => {
  const { data } = useGetCurrentProfileDataQuery()
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
        {...changeInfoRegister('username')}
        id="username"
        label={'Username'}
        defaultValue={data.username}
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...changeInfoRegister('bio')}
        id="bio"
        label={'Bio'}
        defaultValue={data.bio}
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...changeInfoRegister('location')}
        id="location"
        label={'Location'}
        defaultValue={data.location}
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...changeInfoRegister('website')}
        id="website"
        label={'Website'}
        defaultValue={data.website}
        type="text"
        variant="outlined"
        fullWidth
      />
    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
      <Typography>Birth Date</Typography>
      <DatePicker
      selected={new Date()}
        {...changeInfoRegister('birthDate')}
      />

    </Box>

    </Container>
  )
}

export default EditProfileFormTemplate
