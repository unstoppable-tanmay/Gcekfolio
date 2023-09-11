import React from 'react';
import Image from 'next/image';

const code = require('../../../assets/images/club/code.jpeg');
const navy = require('../../../assets/images/club/navy.webp');
const photography = require('../../../assets/images/club/photography.webp');

const Clubs = () => {
  return (
    <div className='mx-7 flex w-screen flex-col items-center justify-center gap-5'>
      <div className='text-center text-[25px] font-medium'>Clubs & Groups</div>
      <div className='mt-4 flex flex-row flex-wrap items-center justify-center gap-32 lg:gap-12'>
        <div className='relative flex h-[250px] w-[370px] max-w-[90vw] items-end justify-center'>
          <Image
            src={navy}
            alt=''
            fill={true}
            className='rounded-[15px]'
            loading='lazy'
          />
          <div className='absolute flex w-[90%] translate-y-[50%] flex-col items-center justify-center gap-2 rounded-xl bg-white px-3 py-4 shadow-xl'>
            <div className='text-[20px] font-medium'>Ncc Navy</div>
            <div className='text-center text-[13px] font-normal text-opacity-30'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </div>
          </div>
        </div>
        <div className='relative flex h-[250px] w-[370px] max-w-[90vw] items-end justify-center'>
          <Image
            src={code}
            alt=''
            fill={true}
            className='rounded-[15px]'
            loading='lazy'
          />
          <div className='absolute flex w-[90%] translate-y-[50%] flex-col items-center justify-center gap-2 rounded-xl bg-white px-3 py-4 shadow-xl'>
            <div className='text-[20px] font-medium'>CodeBreakers</div>
            <div className='text-center text-[13px] font-normal text-opacity-30'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </div>
          </div>
        </div>
        <div className='relative flex h-[250px] w-[370px] max-w-[90vw] items-end justify-center'>
          <Image
            src={photography}
            alt=''
            fill={true}
            className='rounded-[15px]'
            loading='lazy'
          />
          <div className='absolute flex w-[90%] translate-y-[50%] flex-col items-center justify-center gap-2 rounded-xl bg-white px-3 py-4 shadow-xl'>
            <div className='text-[20px] font-medium'>ClixoGraphers</div>
            <div className='text-center text-[13px] font-normal text-opacity-30'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20 text-center text-[15px] font-medium text-primary '>
        Show More
      </div>
    </div>
  );
};

export default Clubs;
