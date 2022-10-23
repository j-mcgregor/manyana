import React, { FC, ReactNode } from 'react';

import { CookieBanner } from './CookieBanner';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="text-center">{children}</div>
      <Footer />
      <CookieBanner />
    </>
  );
};
