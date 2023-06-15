import React from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import PurpleButton from '../PurpleButton';

const NavBar = () => {
  return (
    <div className='mx-8 flex h-20 items-center justify-between font-poppins'>
      <div className='flex items-center gap-10'>
        <div className='flex text-3xl  font-semibold'>
          <p>Gcek</p>
          <p className='text-primary'>Folio</p>
        </div>
        <ul className='flex gap-8'>
          <li className='text-primary'>Home</li>
          <li>Library</li>
        </ul>
      </div>
      <ul className='flex items-center gap-8'>
        <li className='flex items-center gap-3'>
          <MdOutlineLightMode size={'1.4rem'} />
          <select className='bg-white py-2 pl-0 pr-2'>
            <option value={'system'}>System</option>
            <option value={'light'}>Light</option>
            <option value={'dark'}>Dark</option>
          </select>
        </li>
        <li>
          <PurpleButton data={`Let's Join`} />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
