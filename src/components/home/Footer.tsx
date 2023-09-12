import React from 'react';

import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaGitlab } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#010512] flex min-h-[350px] w-screen flex-col items-center justify-around p-7 pb-2'>
      <div className='flex w-full flex-wrap items-center justify-evenly gap-20 p-10'>
        <div className='flex flex-col items-start gap-1 '>
          <div className='text-[25px] font-medium text-white text-opacity-50'>
            Pages
          </div>
          <div className='text-[18px] font-normal text-white'>Home</div>
          <div className='text-[18px] font-normal text-white'>Gallery</div>
          <div className='text-[18px] font-normal text-white'>Library</div>
          <div className='text-[18px] font-normal text-white'>Contest</div>
          <div className='text-[18px] font-normal text-white'>Clubs</div>
          <div className='text-[18px] font-normal text-white'>Projects</div>
        </div>
        <div className='flex flex-col items-start gap-1 '>
          <div className='text-[25px] font-medium text-white text-opacity-50'>
            Links
          </div>
          <div className='text-[18px] font-normal text-white'>Books</div>
          <div className='text-[18px] font-normal text-white'>Notes</div>
          <div className='text-[18px] font-normal text-white'>Live Contest</div>
          <div className='text-[18px] font-normal text-white'>Question</div>
          <div className='text-[18px] font-normal text-white'>Video</div>
          <div className='text-[18px] font-normal text-white'>User</div>
        </div>
        <div className='flex flex-col items-start gap-1 '>
          <div className='text-[25px] font-medium text-white text-opacity-50'>
            Clubs
          </div>
          <div className='text-[18px] font-normal text-white'>Codebreakers</div>
          <div className='text-[18px] font-normal text-white'>Mob</div>
          <div className='text-[18px] font-normal text-white'>Sports</div>
          <div className='text-[18px] font-normal text-white'>Ncc</div>
          <div className='text-[18px] font-normal text-white'>Litreture</div>
          <div className='text-[18px] font-normal text-white'>Kilobots</div>
        </div>
        <div className='grid grid-cols-3 gap-5 text-[26px] text-white '>
          <FaDiscord className='duration-200 hover:scale-125' />
          <FaInstagram className='duration-200 hover:scale-125' />
          <FaLinkedin className='duration-200 hover:scale-125' />
          <FaYoutube className='duration-200 hover:scale-125' />
          <FaTwitter className='duration-200 hover:scale-125' />
          <FaFacebook className='duration-200 hover:scale-125' />
          <FaTelegram className='duration-200 hover:scale-125' />
          <FaGithub className='duration-200 hover:scale-125' />
          <FaGitlab className='duration-200 hover:scale-125' />
        </div>
      </div>

      <div className='text-[13px] text-white'>
        Copyright Reserved By Gcek@2023
      </div>
    </div>
  );
};

export default Footer;
