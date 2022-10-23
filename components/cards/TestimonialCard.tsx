import { FC, ReactNode } from 'react';
import Image from 'next/image';

export const TestimonialCard: FC<{
  logo: string;
  testimonials: Array<{ text: string; source: ReactNode }>;
}> = ({ logo, testimonials }) => (
  <div className="text-left flex flex-col justify-center w-full shadow-md p-3 lg:p-10 bg-white">
    {/* logo */}
    <div className="w-full h-[80px]">
      <Image
        src={logo}
        alt={`swiper-slide-${0}`}
        layout="fixed"
        height={80}
        width={170}
        objectFit="contain"
      />
    </div>
    <div className="space-y-5 my-5">
      {testimonials.map((testi, i) => (
        <div key={`testimonial-text-${i}`}>
          {/* testimonial */}
          <div className="text-lg font-jost-regular px-4">{testi.text}</div>
          {/* source */}
          <div className="flex flex-row lg:flex-row-reverse px-4 mt-5">
            <div className="font-jost-regular w-full lg:w-1/4">
              {testi.source}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
