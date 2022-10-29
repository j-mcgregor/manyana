/* eslint-disable security/detect-non-literal-require */
import 'swiper/css';
import 'swiper/css/navigation';

import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Layout } from '../components/layout/Layout';
import { Home } from '../components/pages/Home';

export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
}

export default function Homepage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../messages/${locale}/cookies.${locale}.json`),
        ...require(`../messages/${locale}/nav.${locale}.json`),
        ...require(`../messages/${locale}/layout.${locale}.json`)
      }
    }
  };
};
