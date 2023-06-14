import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import NotFoundPageView from '@/views/404/404';
import { NextSeo } from 'next-seo';

const NotFoundPage = () => {
  return (
    <>
      <DefaultSeo title="Not Found" {...SEO} />
      <NextSeo noindex={true} />
      <NotFoundPageView />
    </>
  );
};

export default NotFoundPage;
