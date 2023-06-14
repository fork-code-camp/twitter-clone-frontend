import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    locale: 'en_IE',
    type: 'website',
    title: 'fork-code-camp',
    description:
      'We are a team of experienced front-end and back-end developers working on creating an educational project - a Twitter clone that allows users to share their thoughts and ideas',
    url: 'http://localhost:3000/',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/130981921?s=200&v=4',
        width: 200,
        height: 200,
        alt: 'tweetclone',
        type: 'image/jpeg',
      },
      { url: 'https://i.imgur.com/7oRcoh7.jpg' },
    ],
    siteName: 'SiteName',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
      sizes: '16x16',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'description',
      content: 'Twitter clone',
    },
  ],
  defaultTitle: 'Twitter Clone'
};

export default config;
