import React from 'react';

import Header from '@/components/home/Header';
import Works from '@/components/home/Works';
import Gallery from '@/components/home/Gallery';
import Clubs from '@/components/home/Clubs';
import Footer from '@/components/home/Footer';
import Alumuni from '@/components/home/Alumuni';
import Review from '@/components/home/Review';

export default function Home() {
  return (
    <div className='flex w-screen flex-col items-center gap-32'>
      <Header />
      <Works />
      <Gallery />
      <Clubs />
      <Alumuni />
      <Review />
      <Footer />
    </div>
  );
}
