import Image from 'next/image';
import React from 'react';
import headerImage from '../../../assets/images/header_back.png';

const Header = () => {
  return (
    <div className='mt-8'>
      <div className='relative flex h-[calc(100vh-9rem)] w-[calc(100vw-7rem)] items-center justify-center rounded-3xl bg-black'>
        <Image
          src={headerImage}
          typeof='image/png'
          alt='Header Background'
          width={802}
          height={560}
          className='absolute left-[50%] top-[50%] h-[80%] w-[100%] translate-x-[-50%] translate-y-[-50%] rounded-3xl object-contain '
        />
        <div className='z-10 flex flex-col gap-2'>
          <h1 className='text-center text-8xl font-bold tracking-wider font-Tahoma text-white'>
            We Are Engineers
          </h1>
          <h2 className='text-center text-3xl font-semibold tracking-wider font-Montserrat text-white'>
            Bridging the gap between imagination and reality
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
