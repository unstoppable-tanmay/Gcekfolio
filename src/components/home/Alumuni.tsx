import React from 'react';
import Image from 'next/image';
import PurpleButton from '../PurpleButton';

const alumni = require('../../../assets/images/alumuni/alumni.png');

const Alumuni = () => {
  return (
    <div className='mx-7 flex w-screen flex-col items-center justify-center gap-5'>
      <div className='text-center text-[25px] font-medium'>
        Alumni & Contributors{' '}
      </div>
      <div className='relative mt-5 flex h-[500px] w-[85vw] flex-col items-center justify-evenly md:w-[70vw]'>
        <Image
          className='z-10 rounded-xl'
          src={alumni}
          alt=''
          fill={true}
          style={{ objectFit: 'cover' }}
        />
        <div className='absolute z-20 h-full w-full rounded-xl bg-black bg-opacity-20'></div>
        <div className='z-20 flex text-[85px] font-bold tracking-widest text-white text-opacity-50 duration-300 hover:text-opacity-70 md:text-[125px] lg:text-[150px]'>
          <div className='-translate-y-16'>A</div>
          <div className='translate-y-14'>L</div>
          <div className='-translate-y-16'>U</div>
          <div className='translate-y-14'>M</div>
          <div className='-translate-y-20'>N</div>
          <div className='translate-y-16'>I</div>
        </div>
        <PurpleButton data='Know More' className='z-20' />
      </div>
    </div>
  );
};

export default Alumuni;
