import React, { FC, useEffect, useState } from 'react';

import { setCookie, hasCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';
import { AiOutlineClose } from 'react-icons/ai';

export const COOKIE_NAME = 'manyana-consent';

export const CookieBanner: FC = () => {
  const [consent, setConsent] = useState(true);
  const t = useTranslations();

  useEffect(() => {
    setConsent(hasCookie(COOKIE_NAME));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie(COOKIE_NAME, 'true', { maxAge: 60 * 60 * 24 * 365 });
  };

  const closeP = () => {
    setConsent(true);
  };

  const denyCookie = () => {
    setConsent(true);
    setCookie(COOKIE_NAME, 'false', { maxAge: 60 * 60 * 24 * 365 });
  };

  if (consent === true) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-5 w-[90%] left-1/2 -translate-x-1/2 bg-dark-violet border-black border-2 text-white z-front text-sm ${
        consent ? 'hidden' : ''
      }`}
    >
      <div className="px-6 py-10">{t('cookies')}</div>
      <div className="flex align-middle justify-between absolute top-1 right-1">
        <AiOutlineClose
          size={25}
          onClick={e => {
            closeP();
          }}
        />
      </div>
      <div className="flex items-center justify-center space-x-5 bg-black/20 p-3">
        <button
          onClick={() => {
            acceptCookie();
          }}
          className="py-1 px-4 bg-green-800 rounded-md"
        >
          Accept All
        </button>
        <button
          onClick={e => denyCookie()}
          className="py-1 px-4 bg-red-800 rounded-md"
        >
          Deny All
        </button>
      </div>
    </div>
  );
};
