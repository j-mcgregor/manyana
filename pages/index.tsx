/* eslint-disable security/detect-non-literal-require */
import 'swiper/css';
import 'swiper/css/navigation';

import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Layout } from '../components/layout/Layout';
import { Home } from '../components/pages/Home';
import config from '../config';

export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
}

export default function Homepage() {
  return (
    <Layout>
      <Head>
        <title>{config.title}</title>
      </Head>
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
