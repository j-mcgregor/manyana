/* eslint-disable no-console */
import { useRouter } from 'next/router';
import React, { FC, useEffect, useRef, useState } from 'react';
import { BsChevronUp, BsChevronDown, BsArrowUpRight } from 'react-icons/bs';
import Swiper, { Pagination, Navigation } from 'swiper';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import showcaseJSON from '../../messages/en/showcase.en.json';

export const ShowcaseCard: FC<{
  title: string;
  type: string;
  description: string;
  href: string;
}> = ({ title, type, description, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-light-violet text-xl uppercase flex items-center hover:scale-105 duration-200 bg-white/80 mx-0 md:mx-10 p-2 md:p-4 rounded-md shadow-md hover:shadow-xl"
    >
      <div className="w-full text-left font-koulen space-y-10 border-[1px] border-apricot p-2 md:p-5 rounded-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="text-dark-violet text-3xl uppercase">{title}</div>
          <div className="font-jost-regular text-blue-purple text-base">
            {type}
          </div>
        </div>
        <div className="font-jost-regular text-sm pr-10 md:pr-0">
          {description}
        </div>
      </div>
    </a>
  );
};

export const Showcase = () => {
  const [swiper, setSwiper] = useState<Swiper>();

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiper?.params) {
      // @ts-ignore
      swiper.params.navigation.prevEl = prevRef.current;
      // @ts-ignore
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="h-full md:h-screen w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center p-5 md:p-20 text-center md:text-right">
        <div className="text-4xl md:text-6xl font-koulen leading-tight text-apricot w-full">
          Showcase
        </div>
        <div className="text-2xl md:text-4xl font-koulen leading-tight text-light-violet w-full">
          Contracting, consultation and full project development
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center px-4 md:px-20 text-left">
        <div ref={prevRef} className="flex items-center justify-center w-full">
          <BsChevronUp className="cursor-pointer text-dark-violet" size={30} />
        </div>
        <SwiperReact
          direction={'vertical'}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '</span>';
            },
            currentClass: 'text-apricot'
          }}
          navigation={{
            enabled: true,
            // @ts-ignore
            prevEl: prevRef,
            // @ts-ignore
            nextEl: nextRef
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper h-[300px]"
          onSwiper={setSwiper}
          loop
          updateOnWindowResize
          observer
          observeParents
        >
          {showcaseJSON?.showcase?.map(project => (
            <SwiperSlide key={project.name}>
              <ShowcaseCard
                title={project.name}
                type={project.type}
                description={project.description}
                href={project.href}
              />
            </SwiperSlide>
          ))}
        </SwiperReact>
        <div ref={nextRef} className="flex items-center justify-center w-full">
          <BsChevronDown
            className="cursor-pointer text-dark-violet"
            size={30}
          />
        </div>
      </div>
    </div>
  );
};
