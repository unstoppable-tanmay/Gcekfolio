import React from 'react';
import Image from 'next/image';
const bookImage = require('../../../assets/images/works/loop_2.gif');
const googleImage = require('../../../assets/images/works/Storyboard_1_Final.gif');
const serviceImage = require('../../../assets/images/works/Cloud-Service.gif');

function Works() {
  return (
    <div className='mx-7 flex w-screen flex-col items-center justify-center gap-5'>
      <div className='text-center text-[25px] font-medium'>Our Works</div>
      <div className='mt-8 flex w-full flex-row flex-wrap items-center justify-center gap-10'>
        <div className='flex h-[400px] w-[350px] flex-col items-center justify-center gap-5 rounded-2xl bg-white p-5 pb-10 shadow-xl'>
          <Image
            src={bookImage}
            alt='Books'
            className='h-2/3 w-screen object-cover'
          />
          <div className='text-xl font-medium'>The Books</div>
          <div className='text-center text-sm font-light'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industryever since the 1500s,{' '}
          </div>
        </div>
        <div className='flex h-[400px] w-[350px] flex-col items-center justify-center gap-5 rounded-2xl bg-white p-5 pb-10 shadow-xl'>
          <Image
            src={googleImage}
            alt='Books'
            className='h-2/3 w-screen object-cover'
          />
          <div className='text-xl font-medium'>Contests</div>
          <div className='text-center text-sm font-light'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industryever since the 1500s,{' '}
          </div>
        </div>
        <div className='flex h-[400px] w-[350px] flex-col items-center justify-center gap-5 rounded-2xl bg-white p-5 pb-10 shadow-xl'>
          <Image
            src={serviceImage}
            alt='Books'
            className='h-2/3 w-screen object-cover'
          />
          <div className='text-xl font-medium'>Projects</div>
          <div className='text-center text-sm font-light'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industryever since the 1500s,{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
