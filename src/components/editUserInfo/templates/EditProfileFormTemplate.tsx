import React, { FC } from 'react'
import { IChangeInfoRequest } from '@/services/types'
import { Container, TextField, Tooltip } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'
import MyInputMask from '../../../ui/input/MyInputMask'
import { useGetCurrentProfileDataQuery } from '@/query/profile/currentBioData.query'

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
        alignItems: 'center',
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
      <Tooltip title="YYYY-MM-DD" placement="bottom-start" arrow>
        <MyInputMask
          {...changeInfoRegister('birthDate')}
          mask="9999-99-99"
          id="birthDate"
          label={'Birthdate'}
          defaultValue={data.birthDate}
          type="text"
          variant="outlined"
          fullWidth
        />
      </Tooltip>
    </Container>
  )
}

export default EditProfileFormTemplate
