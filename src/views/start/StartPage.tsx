import React from 'react';
import { Link } from '@mui/material';
import SignUpPageTemplate from '../../forms/Login';
import { IAuthResponse } from '@/services/types';
const StartPage = () => {
  
  async function onSumbit(data: IAuthResponse) {
    await console.log(data);
  }

  return (
    <main>
      <SignUpPageTemplate onSumbit={onSumbit} />
      <div>
        <Link href="/home" variant="h5">
          Home page
        </Link>
      </div>
    </main>
  );
};

export default StartPage;
