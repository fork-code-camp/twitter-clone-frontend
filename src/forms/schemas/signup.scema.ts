import { object, string } from 'yup'

const sighupSchema = object({
  name: string().min(5, 'Name must be at least 5 characters long').max(50, 'Name must be no more than 50 characters').required('Email is required field'),
  email: string().email().required('Email is required field'),
  password: string().min(5, 'Password must be at least 5 characters long').max(25, 'Password must be no more than 25 characters')
    .required('Password is required field'),
})

export default sighupSchema
