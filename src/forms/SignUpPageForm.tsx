import React, { FC } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import SignUpPageTemplate from './templates/SignUpPageTemplate'
import { yupResolver } from '@hookform/resolvers/yup'
import sighupSchema from './schemas/signup.scema'
import { Box } from '@mui/material'

type FormData = {
  email: string
  password: string
}

const SignUpPageForm: FC = () => {
  const methods = useForm<FormData>({
    mode: 'onBlur',
    resolver: yupResolver(sighupSchema),
  })

  const onFormSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(onFormSubmit)}>
        <SignUpPageTemplate />
      </Box>
    </FormProvider>
  )
}

export default SignUpPageForm
