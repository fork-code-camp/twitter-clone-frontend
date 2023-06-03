import React, { FC } from 'react'
import Head from 'next/head'
import SignUpPageForm from '@/forms/SignUpPageForm'

const SignUp: FC = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign Up Twitter" />
      </Head>
      <main>
        <SignUpPageForm />
      </main>
    </>
  )
}

export default SignUp
