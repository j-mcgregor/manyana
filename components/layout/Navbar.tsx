/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-case-declarations */
import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { VscGlobe, VscThreeBars } from 'react-icons/vsc';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';

import { useScrollPosition } from '../../hooks/useScrollPosition';

export const Navbar: FC = () => {
  const t = useTranslations();
  const router = useRouter();
  const { scrollPosition, updatePosition } = useScrollPosition();
  const [lang, setLang] = useState<'EN' | 'ES'>('EN');

  const [isDark, setIsDark] = useState(false);

  const navLinks: Array<{ label: ReactNode; href: string; active: boolean }> = [
    {
      label: t('nav.about'),
      href: 'about',
      active: router.asPath.includes('about')
    },
    {
      label: t('nav.services'),
      href: 'services',
      active: router.asPath.includes('#services')
    },
    {
      label: t('nav.showcase'),
      href: 'showcase',
      active: router.asPath.includes('#showcase')
    },
    {
      label: t('nav.contact'),
      href: 'contact',
      active: router.asPath.includes('#contact')
    }
  ];

  return (
    <div className="w-full lg:w-[150px] h-12 sm:h-full flex flex-row sm:flex-col sm:items-center justify-between z-[999] font-jost-regular bg-dark-violet shadow-2xl text-sm fixed">
      {/* links:sm */}
      <div className="hidden sm:flex flex-col items-start justify-center w-full h-full px-5 py-2 space-y-10">
        {navLinks.map((nav, i) => {
          return (
            <Link
              to={nav.href}
              href={`#${nav.href}`}
              key={`nav-link-${i}`}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-link"
              className="text-apricot tracking-wider text-lg"
            >
              <span
                className={classNames(
                  'no-underline w-full cursor-pointer hover:text-blue-purple lowercase'
                  // nav.active ? '' : 'text-apricot'
                )}
              >
                {nav.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* links:mobile */}
      <div className="sm:hidden w-full">
        <Menu
          as="div"
          className="relative inline-block text-left w-full h-full text-white"
          id="nav-menu"
        >
          <div className="flex justify-between items-center w-full p-2 bg-dark-violet">
            <div className="relative h-8 w-8">
              <Image src="/images/logo-white.png" layout="fill" alt="logo" />
            </div>
            <Menu.Button as="div" className="cursor-pointer">
              <VscThreeBars size={30} />
            </Menu.Button>
          </div>
          <Menu.Items className="focus:outline-none bg-dark-violet">
            <div className="px-1 py-1 flex flex-col space-y-5">
              {navLinks.map((nav, i) => (
                <Link to={nav.href} key={`nav-link-${i}`}>
                  <span
                    className={classNames(
                      'no-underline px-1 cursor-pointer hover:text-[#086370] lowercase w-full text-right',
                      nav.active && 'text-link'
                    )}
                  >
                    {nav.label}
                  </span>
                </Link>
              ))}
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};
