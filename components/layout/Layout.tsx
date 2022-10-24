import React, { FC, ReactNode } from 'react';

import { CookieBanner } from './CookieBanner';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen h-full w-full grid grid-cols-layout bg-seashell bg-[url('/images/hexagons.svg')] bg-repeat bg-contain bg-fixed">
      <Navbar />
      <div></div>
      <div className="text-center">{children}</div>
      {/* <Footer />
      <CookieBanner /> */}
    </div>
  );
};
