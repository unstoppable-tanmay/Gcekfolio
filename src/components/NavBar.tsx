'use client';
import React, { useState } from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import PurpleButton from './PurpleButton';

import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='w-screen overflow-x-hidden'>
      <div className='m-4 mx-7 flex h-[40px] items-center justify-between font-poppins'>
        <div className='flex items-center gap-10'>
          <div className='-mt-2 flex  text-3xl font-semibold'>
            <p>Gcek</p>
            <p className='text-primary'>Folio</p>
          </div>
          <ul className='hidden gap-8 text-[18px] md:flex'>
            <li className='text-primary'>Home</li>
            <li>Library</li>
          </ul>
        </div>
        <ul className='flex items-center gap-8'>
          <li className='hidden items-center gap-3 md:flex'>
            <MdOutlineLightMode size={'1.4rem'} />
            <select className='bg-white py-2 pl-0 pr-2'>
              <option value={'system'}>System</option>
              <option value={'light'}>Light</option>
              <option value={'dark'}>Dark</option>
            </select>
          </li>
          <li>
            <PurpleButton data={`Let's Join`} className='' />
          </li>
          <FaBars
            className='text-[25px] md:hidden'
            onClick={() => {
              setNav(!nav);
            }}
          />
        </ul>
      </div>
      <div
        className={`absolute left-0 top-0 z-50 flex h-screen w-[300px] flex-col items-start justify-start bg-white p-7 shadow-xl duration-500 md:hidden ${
          nav ? '' : '-translate-x-[100%]'
        }`}
      >
        <ul className='flex flex-col gap-2 text-[18px] text-black md:hidden'>
          <li className='text-primary'>Home</li>
          <li>Library</li>
        </ul>
        <select className='bg-white py-2 pl-0 pr-2'>
          <option value={'system'}>System</option>
          <option value={'light'}>Light</option>
          <option value={'dark'}>Dark</option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
