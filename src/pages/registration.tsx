import Head from 'next/head';
import { Container } from '@mui/material';
import RegistrationForm from '@/forms/RegistrationForm';

const Home = () => {
  return (
    <>
      <Head>
        <title>Registration</title>
        <meta name="description" content="Registration on Twitter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '100vh',
        }}
      >
        <RegistrationForm />
      </Container>
    </>
  );
};

export default Home;
