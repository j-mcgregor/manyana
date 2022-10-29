import Head from 'next/head';
import React from 'react';

import config from '../../config';
import ogImage from '../../public/images/monkey.svg';

type SEOProps = {
  title?: string;
  description?: string;
  article?: boolean;
  path: string;
};

const Seo = ({ title, description, article, path }: SEOProps) => {
  const metaTitle = title ? `${title} | ${config.title}` : config.title;
  const metaDescription = description || config.description;
  const metaImage = `${config.URL}${ogImage.src}`; // placeholder logo here

  return (
    <Head>
      <noscript>
        Your browser does not support JavaScript! This site works best with
        javascript ( and by best only ).
      </noscript>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keyword" property="contracting" />

      {/* Facebook */}
      <meta property="og:url" content={`${config.URL}/${path}`} />
      <meta property="og:type" content={article ? `article` : `website`} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={config.URL} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* LinkedIn */}
      <meta name="linkedin:card" content="summary_large_image" />
      <meta name="linkedin:url" content={config.URL} />
      <meta name="linkedin:title" content={metaTitle} />
      <meta name="linkedin:description" content={metaDescription} />
      <meta name="linkedin:image" content={metaImage} />

      {config.twitterUsername && (
        <meta name="twitter:creator" content={config.twitterUsername} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="favicon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff"></meta>
      <link rel="preload" as="font" />
    </Head>
  );
};

export default Seo;
