import 'swiper/css';
import 'swiper/css/navigation';

import { hasCookie } from 'cookies-next';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Layout } from '../components/layout/Layout';
import { Home } from '../components/pages/Home';

export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
}

export default function Homepage() {
  const t = useTranslations();

  const { register, handleSubmit, formState } = useForm<ContactForm>();
  const [message, setMessage] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleFormSubmit = handleSubmit(async data => {
    const consent = hasCookie('manyana-consent');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({ ...data, consent }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const json = await response.json();

      if (json.ok) {
        setMessage({
          success: true,
          message: t('landing.contact.submission_success_message')
        });
      } else {
        setMessage({
          success: false,
          message: json.message ?? t('landing.contact.submission_error_message')
        });
      }
    } catch (error) {
      setMessage({
        success: false,
        message: t('landing.contact.submission_error_message')
      });
    }
  });

  return (
    <Layout>
      <Head>
        <title>Home</title>
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
