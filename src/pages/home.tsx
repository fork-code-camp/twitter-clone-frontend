import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import HomePage from '@/views/home/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HomePage/>
      </main>
    </>
  );
}