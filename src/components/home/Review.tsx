import React from 'react';
import Image from 'next/image';
import PurpleButton from '../PurpleButton';

const  review = require('../../../assets/images/review/review.gif');

const Review = () => {
  return (
    <>
      <div className='text-center text-[25px] font-medium'>
        Review and Suggestions
      </div>
      <div className='relative flex w-screen items-center justify-center'>
        <div className='absolute z-10 hidden w-[100vw] items-center justify-center overflow-hidden text-[130px] font-bold tracking-[.7em] text-black text-opacity-50 duration-300 md:flex'>
          &nbsp;REVIEW
        </div>
        <div className='z-20 flex w-[390px] max-w-[90vw] flex-col items-center justify-around gap-5 rounded-xl bg-white p-5 shadow-xl'>
          <Image src={review} alt='' />
          <div className='text-center text-black text-opacity-30'>
            We Need Your Feedback and Suggestion for improving the user
            experience and resolving any type of problems. please be a part of
            our teem to resolve problems i our community
          </div>
          <PurpleButton data='Review' className='' />
        </div>
      </div>
    </>
  );
};

export default Review;
