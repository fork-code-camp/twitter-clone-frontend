import { object, string } from 'yup'

const sighupSchema = object({
  email: string().email().required('Email is required field'),
  password: string()
    .required('Password is required field')
    .min(8, 'Password must be at least 8 characters long'),
})

export default sighupSchema
