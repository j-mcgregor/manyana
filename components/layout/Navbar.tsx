/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-case-declarations */
import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { VscGlobe, VscThreeBars } from 'react-icons/vsc';

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
      href: '/about',
      active: router.asPath === '/about'
    },
    {
      label: t('nav.services'),
      href: '/services',
      active: router.asPath === '/services'
    },
    {
      label: t('nav.clients'),
      href: '/clients',
      active: router.asPath === '/clients'
    },
    {
      label: t('nav.blog'),
      href: 'https://blog.manyanalabs.com/resources',
      active: false
    },
    {
      label: t('nav.careers'),
      href: '/careers',
      active: router.asPath === '/careers'
    },
    {
      label: t('nav.contact'),
      href: '/#section-contact',
      active: router.asPath === '/#section-contact'
    }
  ];

  const isInSection = (bounding: DOMRect): boolean =>
    bounding.top < scrollPosition && bounding.bottom > scrollPosition;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    updatePosition();

    const checkElement = () => {
      switch (router.route) {
        case '/':
          const sectSponsor = document.getElementById('section-sponsor');
          const sectContact = document.getElementById('section-contact');
          if (!sectSponsor || !sectContact) return;

          const rectSponsor = sectSponsor.getBoundingClientRect();
          const rectContact = sectContact.getBoundingClientRect();

          if (isInSection(rectSponsor)) {
            setIsDark(true);
          } else if (isInSection(rectContact)) {
            setIsDark(true);
          } else {
            setIsDark(false);
          }
          break;

        case '/services':
          const sectServices = document.getElementById('section-services');

          if (!sectServices) return;

          const rectServices = sectServices.getBoundingClientRect();

          if (isInSection(rectServices)) {
            setIsDark(true);
          } else {
            setIsDark(false);
          }
          break;
        case '/clients':
          const sectTestimonials = document.getElementById(
            'section-testimonials'
          );

          if (!sectTestimonials) return;

          const rectTestimonial = sectTestimonials.getBoundingClientRect();

          if (isInSection(rectTestimonial)) {
            setIsDark(true);
          } else {
            setIsDark(false);
          }
          break;
        case '/careers':
          const sectCareerInfo = document.getElementById(
            'section-careers-information'
          );

          if (!sectCareerInfo) return;

          const rectCareerInfo = sectCareerInfo.getBoundingClientRect();

          if (isInSection(rectCareerInfo)) {
            setIsDark(true);
          } else {
            setIsDark(false);
          }
          break;
        case '/about':
          setIsDark(true);
          break;
        default:
          break;
      }
    };

    checkElement();

    window.addEventListener('scroll', checkElement);

    return () => {
      window.removeEventListener('scroll', checkElement);
    };
  }, []);

  return (
    <div
      className={classNames(
        'w-full flex flex-col lg:flex-row lg:items-center justify-between lg:px-20 lg:py-5 relative lg:fixed z-[999] font-bold bg-gradient-to-b',
        isDark
          ? 'from-white via-white to-transparent'
          : 'from-black via-black to-transparent'
      )}
    >
      {/* logo */}
      <Link href="/">
        <div className="hidden lg:block relative h-8 w-32">
          <Image
            src={
              isDark
                ? '/images/logo/logo-color.svg'
                : '/images/logo/logo-white.svg'
            }
            layout="responsive"
            alt="logo"
            width={60}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </Link>

      {/* links:lg */}
      <div
        className={classNames(
          'hidden lg:flex items-center justify-between',
          !isDark ? 'text-white' : 'text-black'
        )}
      >
        {navLinks.map((nav, i) => {
          // blog is external site; not ideal but fine for now
          if (nav.href === 'https://blog.manyanalabs.com/resources') {
            return (
              <a
                key={`nav-link-${i}`}
                href="https://blog.manyanalabs.com/resources"
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                  'no-underline px-10 cursor-pointer hover:text-[#086370] lowercase',
                  nav.active && 'text-link'
                )}
              >
                {nav.label}
              </a>
            );
          }

          return (
            <Link href={nav.href} key={`nav-link-${i}`}>
              <span
                className={classNames(
                  'no-underline px-10 cursor-pointer hover:text-[#086370] lowercase',
                  nav.active && 'text-link'
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
                <Link href={nav.href} key={`nav-link-${i}`}>
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
            <button
              onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')}
              className="text-right w-full px-2 py-1 text-lg font-jost-regular"
            >
              {lang === 'EN' ? 'ES' : 'EN'}
            </button>
          </Menu.Items>
        </Menu>
      </div>

      {/* dropdown */}
      <div className="hidden lg:block">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              className={classNames(
                'inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-lg font-medium hover:bg-opacity-30 focus:outline-none',
                !isDark ? 'text-white' : 'text-black'
              )}
            >
              <VscGlobe className="mr-2" size={22} />
              {lang}
              <BsChevronDown className="ml-2" size={20} />
            </Menu.Button>
          </div>
          <Menu.Items className="absolute right-0 mt-2 w-20 origin-top-right divide-y divide-gray-100 rounded-md focus:outline-none">
            <div className="px-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')}
                    className={`${
                      active ? 'text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-1 text-lg font-jost-regular justify-between`}
                  >
                    {lang === 'EN' ? 'ES' : 'EN'}
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};
