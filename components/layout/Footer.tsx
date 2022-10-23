import React from 'react';
import Image from 'next/image';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="w-full h-auto lg:h-[200px] bg-gradient-to-l from-[#983A5D] to-[#086370] font-jost-bold text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 grid-rows-5 lg:grid-rows-1 h-full px-10 lg:px-0">
        {/* WHITE LOGO */}
        <div className="w-full relative items-center justify-center z-20 flex h-full">
          <Image
            src="/images/logo/logo-white.svg"
            layout="intrinsic"
            alt="logo"
            width={150}
            height={120}
          />
        </div>
        {/* COL 1 */}
        <div className="flex flex-col items-start justify-start lg:mt-10">
          <div className="text-2xl">Poland office</div>
          <div className="text-base font-jost-regular">Al. Jerozolimskie</div>
          <div className="text-base font-jost-regular">81 02-001</div>
          <div className="text-base font-jost-regular">Warsaw</div>
        </div>
        {/* COL 2 */}
        <div className="flex flex-col items-start justify-start lg:mt-10">
          <div className="text-2xl">Serbia office</div>
          <div className="text-base">7 Kolubarska St.</div>
          <div className="text-base font-jost-regular">34 000 Kragujevac</div>
          <div className="text-base font-jost-regular">Serbia</div>
        </div>
        {/* COL 3 */}
        <div className="flex flex-col items-start justify-start lg:mt-10">
          <div className="text-2xl">Mexico office</div>
          <div className="text-base font-jost-regular">Frida Kahlo 195-808</div>
          <div className="text-base font-jost-regular">
            Torre Vértice Valle Oriente
          </div>
          <div className="text-base font-jost-regular">
            66269 San Pedro Garza García
          </div>
          <div className="text-base font-jost-regular">N.L., México</div>
        </div>
        {/* COL 4 */}
        <div className="flex flex-row items-center justify-center gap-x-3">
          <div className="text-2xl bg-[#086370] rounded-full h-12 w-12 flex items-center justify-center">
            <a
              href="https://www.instagram.com/manyanalabs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
          </div>
          <div className="text-2xl bg-[#086370] rounded-full h-12 w-12 flex items-center justify-center">
            <a
              href="https://www.tiktok.com/@manyanalabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
          <div className="text-2xl bg-[#086370] rounded-full h-12 w-12 flex items-center justify-center">
            <a
              href="https://www.linkedin.com/company/manyanalabs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
