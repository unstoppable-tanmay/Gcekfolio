'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';

const headerImage = require('../../../assets/images/header/circular_blob_wave.gif');

import { TextRotator } from 'smooth-text-rotator';

const Header = () => {
  useEffect(() => {
    const textRotator = new TextRotator({
      interval: 2000,
      element: document.querySelector('span[data-phrases]')!,
    });
    textRotator.start();
  });
  return (
    <div className='mt-1'>
      <div className='relative flex h-[90vh] w-[95vw] items-center justify-center rounded-3xl bg-[#010512] p-6 md:h-[85vh]'>
        <Image
          src={headerImage}
          typeof='image/png'
          alt='Header Background'
          width={802}
          height={560}
          className='absolute left-[50%] top-[50%] h-[80%] w-[100%] translate-x-[-50%] translate-y-[-50%] rounded-3xl object-contain '
        />
        <div className='z-10 flex flex-col gap-2'>
          <h1 className='text-center text-[70px] font-bold leading-[1.2] text-white md:text-[100px]'>
            We Are{' '}
            <span data-phrases='["Engineers","Leaders","Developers","Dreamers","Innovaters","Visionaries","Gamers","Architects","Inventors","Creators","Designers"]'></span>
          </h1>
          <h2 className='text-center font-poppins text-[18px] tracking-[.2em] text-white'>
            Bridging the gap between imagination and reality
          </h2>
          <h2 className='text-center text-[13px] font-normal tracking-wider text-white'>
            &ldquo;Ddeveloped and Managed by CodeBreakers&rdquo;
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
