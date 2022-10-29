/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
/* eslint-disable sonarjs/no-duplicate-string */
import classNames from 'classnames';
import { hasCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Background, Parallax } from 'react-parallax';
import { Element } from 'react-scroll';
import Swiper from 'swiper';

import { Showcase } from '../sections/Showcase';

export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const Home = () => {
  const t = useTranslations();
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState } = useForm<ContactForm>();
  const [message, setMessage] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleFormSubmit = handleSubmit(async data => {
    setSubmitting(true);
    const consent = hasCookie('estore-consent');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({ ...data, consent }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const json = await response.json();

      if (json.ok) {
        setMessage({
          success: true,
          message: t('landing.contact.submission_success_message')
        });
      } else {
        setMessage({
          success: false,
          message: json.message ?? t('landing.contact.submission_error_message')
        });
      }
    } catch (error) {
      setMessage({
        success: false,
        message: t('landing.contact.submission_error_message')
      });
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <div className="w-full">
      <div className="h-full md:h-screen w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col text-center md:text-left md:items-start justify-center p-20">
          <div className="text-3xl md:text-4xl font-jost-bold text-puce">
            This is
          </div>
          <div className="text-4xl md:text-[8em] font-koulen text-center md:text-left leading-tight text-dark-violet">
            Manyana <span className="text-apricot">Dev</span>.
          </div>
        </div>
        <div className="w-full md:w-1/2 hidden md:flex flex-col items-center justify-center relative">
          <Parallax
            strength={200}
            renderLayer={percentage => (
              <div className="relative h-full w-full">
                <img
                  alt="monkey"
                  src="/images/monkey.svg"
                  style={{
                    height: percentage * 300,
                    width: percentage * 300
                  }}
                />
              </div>
            )}
          ></Parallax>
        </div>
      </div>

      {/* ============================ */}
      {/* ABOUT ====================== */}
      {/* ============================ */}

      <Element name="about" />
      <Parallax strength={300}>
        <Background className="custom-bg w-full">
          <div
            className="bg-[url('/images/endless-clouds.svg')] bg-black bg-no-repeat bg-cover"
            style={{
              height: 2000,
              width: 2000
            }}
          />
        </Background>
        <div className="h-full md:min-h-screen w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col items-end justify-center p-5 md:p-20 text-center md:text-right">
            <div className="text-4xl md:text-6xl font-koulen leading-tight text-apricot w-full">
              About us
            </div>
            <div className="text-2xl md:text-4xl font-koulen leading-tight text-lavender w-full">
              The what, how and why
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center p-5 md:p-20 text-left text-seashell">
            <div className="space-y-10 font-jost-regular">
              <div>
                Manyana Dev strives on delivering quality software for your
                business needs, ranging from e-commerce, search engine
                optimisation, portfolios and demonstrations, marketing and much
                more
              </div>
              <div>
                We are big believers in doing things right, from the start. We
                work closely with you to map out your needs and can offer a
                range of design services so you know what to expect before the
                first line of code is written.
              </div>
              <div>
                During the development phase, assuming the planning and design
                stages are well thought-through, we aim to provide - at a
                minimum - unit tests in accordance with industry stands and DRY
                principles
              </div>
              <div>
                Being a software company, we also work in Agile "sprints" where
                we aim to delivery regularly across multiple environments so you
                can have the opportunity to share and test the your latest
                features before they reach the client
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      {/* ============================ */}
      {/* SERVICES =================== */}
      {/* ============================ */}

      <Element name="services" />
      <Parallax strength={300}>
        <Background className="custom-bg w-full">
          <div
            className="bg-[url('/images/circuit-board.svg')] bg-light-seashell"
            style={{
              height: 2000,
              width: 2000
            }}
          />
        </Background>

        <div className="h-full md:min-h-screen w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col items-end justify-center p-5 md:p-20 text-center md:text-right">
            <div className="text-4xl md:text-6xl font-koulen text-center md:text-right leading-tight text-apricot w-full">
              Our Services
            </div>
            <div className="text-2xl md:text-4xl font-koulen leading-tight text-light-violet w-full">
              How we can help shape your ideas
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-end justify-center p-5 md:p-20 text-left">
            <div className="space-y-10">
              <div>
                <div className="text-light-violet text-lg md:text-2xl uppercase font-roboto-bold">
                  Product planning & management
                </div>
                <div className="font-jost-regular">
                  Manyana Dev strives on delivering quality software for your
                  business needs, ranging from e-commerce, search engine
                  optimisation, portfolios and demonstrations, marketing and
                  much more
                </div>
              </div>
              <div>
                <div className="text-light-violet text-lg md:text-2xl uppercase font-roboto-bold">
                  UX/UI Design
                </div>
                <div className="font-jost-regular">
                  Manyana Dev strives on delivering quality software for your
                  business needs, ranging from e-commerce, search engine
                  optimisation, portfolios and demonstrations, marketing and
                  much more
                </div>
              </div>
              <div>
                <div className="text-light-violet text-lg md:text-2xl uppercase font-roboto-bold">
                  Development and testing
                </div>
                <div className="font-jost-regular">
                  Manyana Dev strives on delivering quality software for your
                  business needs, ranging from e-commerce, search engine
                  optimisation, portfolios and demonstrations, marketing and
                  much more
                </div>
              </div>
              <div>
                <div className="text-light-violet text-lg md:text-2xl uppercase font-roboto-bold">
                  Hosting and retainer
                </div>
                <div className="font-jost-regular">
                  Manyana Dev strives on delivering quality software for your
                  business needs, ranging from e-commerce, search engine
                  optimisation, portfolios and demonstrations, marketing and
                  much more
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      {/* ============================ */}
      {/* SHOWCASE =================== */}
      {/* ============================ */}

      <Element name="showcase" />
      <Showcase />

      {/* ============================ */}
      {/* CONTACT =================== */}
      {/* ============================ */}
      <Element name="contact" />
      <Parallax strength={500}>
        <Background className="custom-bg w-full">
          <div
            className="bg-[url('/images/temple.svg')] bg-dark-violet"
            style={{
              height: 2000,
              width: 2000
            }}
          />
        </Background>
        <div className="h-full md:h-screen w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center p-5 md:p-20 text-center md:text-right">
            <div className="text-4xl md:text-6xl font-koulen leading-tight text-apricot">
              Get in touch
            </div>
            <div className="text-2xl md:text-4xl font-koulen leading-tight text-lavender">
              Contact us to set up a consultation
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-end justify-center p-5 md:p-20 text-left">
            <div className="w-full h-full bg-light-seashell flex items-center justify-center shadow-lg rounded-md">
              <form
                className="w-full h-full flex flex-col items-start justify-between px-5 md:px-10 py-10 md:py-20 font-jost-regular"
                onSubmit={handleFormSubmit}
              >
                <div className="w-full flex flex-col space-y-5 items-center justify-center">
                  <div className="honey hidden">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="honey hidden">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="honey hidden">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      autoComplete="off"
                    ></textarea>
                  </div>
                  <div className="flex flex-col relative w-full">
                    <label htmlFor="full_name" className="flex flex-col w-full">
                      <span
                        className={classNames(
                          'text-xs bg-light-seashell absolute top-0 left-5 -translate-y-[7px] px-1',
                          formState.errors.fullName && 'text-red-600'
                        )}
                      >
                        {t('landing.contact.full_name_label')}
                      </span>
                      <input
                        {...register('fullName', {
                          required: true
                        })}
                        type="text"
                        id="contact-fullName"
                        placeholder={t('landing.contact.full_name_placeholder')}
                        className={classNames(
                          'border-[1px] border-black rounded-md w-full px-5 py-4 font-jost-regular focus:outline-blue-purple focus:border-apricot bg-light-seashell',
                          formState.errors.fullName &&
                            'border-red-600 text-red-600'
                        )}
                      />
                    </label>
                  </div>
                  <div className="flex flex-col relative w-full">
                    <label htmlFor="full_name" className="flex flex-col w-full">
                      <span
                        className={classNames(
                          'text-xs bg-light-seashell absolute top-0 left-5 -translate-y-[7px] px-1',
                          formState.errors.email && 'text-red-600'
                        )}
                      >
                        {t('landing.contact.work_email_label')}
                      </span>
                      <input
                        type="email"
                        {...register('email', {
                          required: true
                        })}
                        id="contact-email"
                        placeholder={t(
                          'landing.contact.work_email_placeholder'
                        )}
                        className={classNames(
                          'border-[1px] border-black rounded-md w-full px-5 py-4 font-jost-regular focus:outline-blue-purple focus:border-apricot bg-light-seashell',
                          formState.errors.email &&
                            'border-red-600 text-red-600'
                        )}
                      />
                    </label>
                  </div>
                  <div className="flex flex-col relative w-full">
                    <label htmlFor="full_name" className="flex flex-col w-full">
                      <span
                        className={classNames(
                          'text-xs bg-light-seashell absolute top-0 left-5 -translate-y-[7px] px-1',
                          formState.errors.phone && 'text-red-600'
                        )}
                      >
                        {t('landing.contact.phone_label')}
                      </span>
                      <input
                        type="text"
                        {...register('phone', {
                          required: true
                        })}
                        id="contact-phone"
                        placeholder={t('landing.contact.phone_placeholder')}
                        className={classNames(
                          'border-[1px] border-black rounded-md w-full px-5 py-4 font-jost-regular focus:outline-blue-purple focus:border-apricot bg-light-seashell',
                          formState.errors.phone &&
                            'border-red-600 text-red-600'
                        )}
                      />
                    </label>
                  </div>
                  <div className="flex flex-col relative w-full">
                    <label htmlFor="full_name" className="flex flex-col w-full">
                      <span
                        className={classNames(
                          'text-xs bg-light-seashell absolute top-0 left-5 -translate-y-[7px] px-1',
                          formState.errors.phone && 'text-red-600'
                        )}
                      >
                        {t('landing.contact.message_label')}
                      </span>
                      <textarea
                        {...register('message', {
                          required: true
                        })}
                        id="contact-message"
                        placeholder={t('landing.contact.message_placeholder')}
                        className={classNames(
                          'border-[1px] border-black rounded-md w-full px-5 py-4 font-jost-regular focus:outline-blue-purple focus:border-apricot bg-light-seashell',
                          formState.errors.phone &&
                            'border-red-600 text-red-600'
                        )}
                      />
                    </label>
                  </div>
                </div>
                <div className="flex items-start justify-center">
                  {message?.message ? (
                    <div
                      className={classNames(
                        'text-left',
                        message.success ? 'text-green-600' : 'text-red-600'
                      )}
                    >
                      <div className="text-lg">
                        {message.success
                          ? t('landing.contact.submission_success_title')
                          : t('landing.contact.submission_error_title')}
                      </div>
                      <div className="text-sm">{message.message}</div>
                    </div>
                  ) : (
                    <button
                      className={classNames(
                        'flex items-center justify-center text-apricot disabled:text-gray-600 text-xl border-[1px] disabled:border-gray-300 w-40 h-12 rounded-full disabled:bg-gray-300 hover:disabled:bg-gray-300 hover:bg-apricot hover:text-dark-violet cursor-pointer font-roboto-bold duration-100 mt-5',
                        submitting ? 'bg-dark-violet/50' : 'bg-dark-violet'
                      )}
                      disabled={submitting}
                    >
                      {submitting
                        ? 'Submitting...'
                        : t('landing.contact.submit')}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
