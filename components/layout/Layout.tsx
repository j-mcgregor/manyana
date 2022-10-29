import React, { FC, ReactNode } from 'react';

import { CookieBanner } from './CookieBanner';
import { Navbar } from './Navbar';
import Seo from './Seo';

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen h-auto sm:h-full w-full sm:grid sm:grid-cols-layout bg-seashell bg-[url('/images/hexagons.svg')] bg-repeat bg-cover md:bg-contain bg-fixed">
      <Seo
        title="Home"
        description="Bespoke development agency for bringing your vision to life"
        article={false}
        path="/"
      />
      <Navbar />
      <div></div>
      <div className="text-center w-full">{children}</div>
      {/* <Footer /> */}
      <CookieBanner />
    </div>
  );
};
