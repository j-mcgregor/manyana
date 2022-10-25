/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
/* eslint-disable sonarjs/no-duplicate-string */
import classNames from 'classnames';
import { hasCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Background, Parallax } from 'react-parallax';
import { Element, Events } from 'react-scroll';

export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const Home = () => {
  const t = useTranslations();
  const { register, handleSubmit, formState } = useForm<ContactForm>();
  const [message, setMessage] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleFormSubmit = handleSubmit(async data => {
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
    }
  });

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className="">
      <div className="h-screen w-full flex flex-row">
        <div className="w-1/2 flex flex-col items-start justify-center p-20">
          <div className="text-4xl font-jost-bold text-puce">This is</div>
          <div className="text-[8em] font-koulen text-left leading-tight text-dark-violet">
            Manyana <span className="text-apricot">Dev</span>.
          </div>
        </div>
      </div>

      {/* ============================ */}
      {/* ABOUT ====================== */}
      {/* ============================ */}
      <Element name="about" />
      <Parallax strength={300}>
        <Background className="custom-bg">
          <div
            className="bg-[url('/images/endless-clouds.svg')] bg-black bg-no-repeat bg-cover"
            style={{
              height: 2000,
              width: 2000
            }}
          />
        </Background>
        <div className="h-screen w-full flex flex-row">
          <div className="w-1/2 flex flex-col items-end justify-center p-20 text-left">
            <div className="text-6xl font-koulen text-left leading-tight text-apricot">
              About us
            </div>
            <div className="text-4xl font-koulen leading-tight text-lavender">
              The what, how and why
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-start justify-center p-20 text-left text-seashell">
            <div className="space-y-10">
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
        <Background className="custom-bg">
          <div
            className="bg-[url('/images/circuit-board.svg')] bg-light-seashell"
            style={{
              height: 2000,
              width: 2000
            }}
          />
        </Background>

        <div className="h-screen w-full flex flex-row">
          <div className="w-1/2 flex flex-col items-end justify-center p-20 text-left">
            <div className="text-6xl font-koulen text-left leading-tight text-apricot">
              Our Services
            </div>
            <div className="text-4xl font-koulen leading-tight text-light-violet">
              How we can help shape your ideas
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-end justify-center p-20 text-left">
            <div className="space-y-10 ">
              <div>
                <div className="text-light-violet text-2xl uppercase font-roboto-bold">
                  Product planning & management
                </div>
                <div className="font-roboto-light">
                  Manyana Dev strives on delivering quality software for your
                  business needs, ranging from e-commerce, search engine
                  optimisation, portfolios and demonstrations, marketing and
                  much more
                </div>
              </div>
              <div>
                <div className="text-light-violet text-2xl uppercase font-roboto-bold">
                  UX/UI Design
                </div>
                <div className="font-roboto-light">
                  Manyana Dev strives on delivering quality software for your
                  business needs, ranging from e-commerce, search engine
                  optimisation, portfolios and demonstrations, marketing and
                  much more
                </div>
              </div>
              <div>
                <div className="text-light-violet text-2xl uppercase font-roboto-bold">
                  Development and testing
                </div>
                <div className="font-roboto-light">
                  Manyana Dev strives on delivering quality software for your
                  business needs, ranging from e-commerce, search engine
                  optimisation, portfolios and demonstrations, marketing and
                  much more
                </div>
              </div>
              <div>
                <div className="text-light-violet text-2xl uppercase font-roboto-bold">
                  Hosting and retainer
                </div>
                <div className="font-roboto-light">
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
      <div className="h-screen w-full flex flex-row">
        <div className="w-1/2 flex flex-col items-end text-right justify-center p-20">
          <div className="text-6xl font-koulen text-left leading-tight text-apricot">
            Showcase
          </div>
          <div className="text-4xl font-koulen leading-tight text-light-violet">
            Contracting, consultation and from scratch
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col items-start justify-center px-20 text-left ">
          <div
            className="space-y-10 h-4/5 flex flex-col items-start justify-start overflow-y-scroll relative fade-box py-40"
            id="showcase-scroll"
          >
            <ShowcaseCard
              title="Circle of Intrapreneurs"
              type="from-scratch"
              description="Simple social for a global group of like-minded intrapreneurs"
              href=""
            />
            <ShowcaseCard
              title="Connexos Design"
              type="from-scratch"
              description="E-Commerce store for a Montreal-based knitwear company"
              href=""
            />
            <ShowcaseCard
              title="Espace Mo"
              type="from-scratch"
              description="Humble static site for a Quebec-based Osteopathy clinic"
              href=""
            />
            <ShowcaseCard
              title="MDD Solutions"
              type="from-scratch"
              description="First phase of a recruitment-board project based in Watford, UK"
              href=""
            />
            <ShowcaseCard
              title="E-Store Labs"
              type="consultation"
              description="Startup introducing products on e-commerce platforms"
              href=""
            />
            <ShowcaseCard
              title="Wiserfunding"
              type="contracting"
              description="UK-based startup for analysing company risk for investing"
              href=""
            />
            <ShowcaseCard
              title="One Tribe"
              type="contracting"
              description="E-Commerce middleman for saving the rainforest"
              href=""
            />
            <ShowcaseCard
              title="Dezaan"
              type="contracting"
              description="Chocolate manufacturing and suppliers"
              href=""
            />
            <ShowcaseCard
              title="Folk Photography"
              type="from-scratch"
              description="Stylish portfolio page for photography company based Wokingham, UK"
              href=""
            />
            <ShowcaseCard
              title="Sports Icon"
              type="contracting"
              description="NFT marketplace specialising in iconic sports moments"
              href=""
            />
          </div>
        </div>
      </div>

      {/* ============================ */}
      {/* CONTACT =================== */}
      {/* ============================ */}
      <Element name="contact" />
      <Parallax strength={500}>
        <Background className="custom-bg">
          <div
            className="bg-[url('/images/temple.svg')] bg-dark-violet"
            style={{
              height: 2000,
              width: 2000
            }}
          />
        </Background>
        <div className="h-screen w-full flex flex-row">
          <div className="w-1/2 flex flex-col items-end justify-center p-20 text-left">
            <div className="text-6xl font-koulen text-left leading-tight text-apricot">
              Get in touch
            </div>
            <div className="text-4xl font-koulen leading-tight text-lavender">
              Contact us to set up a consultation
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-end justify-center p-20 text-left">
            <div className="w-full h-full bg-light-seashell flex items-center justify-center shadow-lg rounded-md">
              <form
                className="w-full lg:w-3/5 flex flex-col items-start justify-between px-4 gap-y-10 font-roboto-regular"
                onSubmit={handleFormSubmit}
              >
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
                      id="fullName"
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
                      id="email"
                      placeholder={t('landing.contact.work_email_placeholder')}
                      className={classNames(
                        'border-[1px] border-black rounded-md w-full px-5 py-4 font-jost-regular focus:outline-blue-purple focus:border-apricot bg-light-seashell',
                        formState.errors.email && 'border-red-600 text-red-600'
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
                      id="phone"
                      placeholder={t('landing.contact.phone_placeholder')}
                      className={classNames(
                        'border-[1px] border-black rounded-md w-full px-5 py-4 font-jost-regular focus:outline-blue-purple focus:border-apricot bg-light-seashell',
                        formState.errors.phone && 'border-red-600 text-red-600'
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
                      id="message"
                      placeholder={t('landing.contact.message_placeholder')}
                      className={classNames(
                        'border-[1px] border-black rounded-md w-full px-5 py-4 font-jost-regular focus:outline-blue-purple focus:border-apricot bg-light-seashell',
                        formState.errors.phone && 'border-red-600 text-red-600'
                      )}
                    />
                  </label>
                </div>
                <div className="flex items-start justify-center">
                  <button
                    className={classNames(
                      'flex items-center justify-center bg-dark-violet text-apricot disabled:text-gray-600 text-xl border-[1px] disabled:border-gray-300 w-40 h-12 rounded-full disabled:bg-gray-300 hover:disabled:bg-gray-300 hover:bg-apricot hover:text-dark-violet cursor-pointer font-roboto-bold duration-100'
                    )}
                  >
                    {t('landing.contact.submit')}
                  </button>
                </div>
                <div className="flex items-start justify-center">
                  {message?.message && (
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

type ShowcaseType = 'from-scratch' | 'contracting' | 'consultation';

export const ShowcaseCard: FC<{
  title: string;
  type: ShowcaseType;
  description: string;
  href: string;
}> = ({ title, type, description, href }) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-light-violet text-xl uppercase font-roboto-bold hover:text-apricot"
      >
        {title}
      </a>
      <div className="text-blue-purple text-sm uppercase font-roboto-bold">
        {type}
      </div>
      <div className="font-roboto-light text-sm">{description}</div>
    </div>
  );
};
