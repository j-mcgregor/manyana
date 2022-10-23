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
      className={`fixed bottom-0 w-full left-0 right-0 bg-[#983A5D] text-white z-50 ${
        consent ? 'hiddenx' : ''
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
          onClick={e => denyCookie()}
          className="py-1 px-4 bg-red-600 rounded-md"
        >
          Deny All
        </button>
        <button
          onClick={() => {
            acceptCookie();
          }}
          className="py-1 px-4 bg-green-600 rounded-md"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};
