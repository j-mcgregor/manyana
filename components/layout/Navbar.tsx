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
    <div
      className={classNames(
        'w-[150px] h-full flex flex-row lg:flex-col lg:items-center justify-between relative z-[999] font-jost-bold bg-dark-violet shadow-2xl text-lg lg:fixed'
      )}
    >
      {/* links:lg */}
      <div
        className={classNames(
          'hidden lg:flex flex-col items-start justify-center w-full h-full px-5 py-2 space-y-10'
        )}
      >
        {navLinks.map((nav, i) => {
          return (
            <Link
              to={nav.href}
              key={`nav-link-${i}`}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-link"
              className="text-apricot"
            >
              <span
                className={classNames(
                  'no-underline w-full cursor-pointer hover:text-[#086370] lowercase'
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
      <div className="lg:hidden">
        <Menu
          as="div"
          className={classNames(
            'relative inline-block text-left w-full bg-black h-full p-2 text-white'
          )}
          id="nav-menu"
        >
          <div className="flex justify-between items-center w-full">
            <div className="relative h-8 w-32">
              <Image
                src="/images/logo/logo-white.svg"
                layout="fill"
                alt="logo"
              />
            </div>
            <Menu.Button as="div" className="cursor-pointer">
              <VscThreeBars size={30} />
            </Menu.Button>
          </div>
          <Menu.Items className="focus:outline-none">
            <div className="px-1 py-1 flex flex-col">
              {navLinks.map((nav, i) => (
                <Link to={nav.href} key={`nav-link-${i}`}>
                  <span
                    className={classNames(
                      'no-underline px-1 cursor-pointer hover:text-[#086370] lowercase py-2 w-full text-right',
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
