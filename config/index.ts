let URL = '';

// NODE_ENV === 'production' on live AND preview
if (process.env.NODE_ENV === 'production') {
  if (process.env.VERCEL_ENV === 'preview') {
    URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  // overwrite with set deployment URL at launch
  if (process.env.VERCEL_ENV === 'production') {
    URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
} else {
  URL = 'http://localhost:3000';
}

const config = {
  URL,
  title: 'Manyana Dev',
  description: 'Bringing your ideas to life',
  siteUrl: 'manyana.io',
  twitterUsername: '@manyana'
};

export default config;
