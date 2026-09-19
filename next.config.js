const NEW_SITE_URL = 'https://j-mcgregor.manyana.io';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en'
  },
  experimental: { images: { layoutRaw: true } },
  async redirects() {
    return [
      {
        source: '/',
        destination: NEW_SITE_URL,
        permanent: false,
        locale: false
      },
      {
        source: '/:path*',
        destination: `${NEW_SITE_URL}/:path*`,
        permanent: false,
        locale: false
      }
    ];
  }
};

module.exports = nextConfig;
