import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Gallery = () => {
  return (
    <div className='relative mx-7 flex w-screen flex-col items-center justify-center gap-5'>
      <div
        className={`wrapper_bg absolute z-10 h-full w-full bg-black bg-opacity-20 transition-all`}
      ></div>
      <div
        className={`absolute z-20 cursor-pointer text-[90px] font-bold tracking-wider text-white text-opacity-60 duration-500 hover:tracking-[100px] hover:text-opacity-10 md:text-[130px] lg:text-[150px]`}
      >
        GALLERY
      </div>
      <div className='z-0 flex w-full flex-col gap-1'>
        <Marquee
          direction='right'
          autoFill={true}
          speed={40}
          className='h-[200px] w-full'
        >
          <Image
            src={`https://picsum.photos/500/200`}
            alt=''
            className='px-1'
            width={500}
            height={200}
          />
          <Image
            src={`https://picsum.photos/600/200`}
            alt=''
            className='px-1'
            width={600}
            height={200}
          />
          <Image
            src={`https://picsum.photos/400/200`}
            alt=''
            className='px-1'
            width={400}
            height={200}
          />
        </Marquee>
        <Marquee direction='left' autoFill={true} className=' h-[200px] w-full'>
          <Image
            src={`https://picsum.photos/400/200`}
            alt=''
            className='px-1'
            width={400}
            height={200}
          />
          <Image
            src={`https://picsum.photos/500/200`}
            alt=''
            className='px-1'
            width={500}
            height={200}
          />
          <Image
            src={`https://picsum.photos/200/200`}
            alt=''
            className='px-1'
            width={200}
            height={200}
          />
          <Image
            src={`https://picsum.photos/400/200`}
            alt=''
            className='px-1'
            width={400}
            height={200}
          />
        </Marquee>
        <Marquee
          direction='right'
          autoFill={true}
          speed={60}
          className='h-[200px] w-full'
        >
          <Image
            src={`https://picsum.photos/500/200`}
            alt=''
            className='px-1'
            width={500}
            height={200}
          />
          <Image
            src={`https://picsum.photos/200/200`}
            alt=''
            className='px-1'
            width={200}
            height={200}
          />
          <Image
            src={`https://picsum.photos/100/200`}
            alt=''
            className='px-1'
            width={100}
            height={200}
          />
          <Image
            src={`https://picsum.photos/400/200`}
            alt=''
            className='px-1'
            width={400}
            height={200}
          />
          <Image
            src={`https://picsum.photos/300/200`}
            alt=''
            className='px-1'
            width={300}
            height={200}
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
