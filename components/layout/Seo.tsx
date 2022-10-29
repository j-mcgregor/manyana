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
      <meta name="keyword" property="graphic design" content="graphic design" />
      <meta name="keyword" property="web design" content="web design" />
      <meta name="keyword" property="website design" content="website design" />
      <meta
        name="keyword"
        property="website builder"
        content="website builder"
      />
      <meta name="keyword" property="web developer" content="web developer" />
      <meta name="keyword" property="web designer" content="web designer" />
      <meta name="keyword" property="webdesign" content="webdesign" />
      <meta
        name="keyword"
        property="ecommerce website"
        content="ecommerce website"
      />
      <meta
        name="keyword"
        property="web design company"
        content="web design company"
      />
      <meta
        name="keyword"
        property="website creator"
        content="website creator"
      />
      <meta
        name="keyword"
        property="website designer"
        content="website designer"
      />
      <meta
        name="keyword"
        property="responsive web design"
        content="responsive web design"
      />
      <meta
        name="keyword"
        property="web development company"
        content="web development company"
      />
      <meta
        name="keyword"
        property="best website design"
        content="best website design"
      />
      <meta
        name="keyword"
        property="web design software"
        content="web design software"
      />
      <meta
        name="keyword"
        property="web page design"
        content="web page design"
      />
      <meta
        name="keyword"
        property="build a website"
        content="build a website"
      />
      <meta
        name="keyword"
        property="web developer salary"
        content="web developer salary"
      />
      <meta name="keyword" property="design website" content="design website" />
      <meta
        name="keyword"
        property="web design courses"
        content="web design courses"
      />
      <meta
        name="keyword"
        property="how to design a website"
        content="how to design a website"
      />
      <meta
        name="keyword"
        property="web design inspiration"
        content="web design inspiration"
      />
      <meta name="keyword" property="website layout" content="website layout" />
      <meta
        name="keyword"
        property="web application development"
        content="web application development"
      />
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
