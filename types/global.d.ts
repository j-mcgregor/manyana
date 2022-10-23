import { GetStaticProps, NextPage } from 'next';

interface CustomPageProps {
  messages: ReturnType<GetStaticProps>;
}
