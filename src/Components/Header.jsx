import React from 'react';
import logo from './../assets/Images/blogLogo.png';
import { IoLogIn } from "react-icons/io5";

function Header() {
  return (
    <div className='bg-black flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-8 gap-4'>
      <img src={logo} className='w-[150px] md:w-[180px]' />
      <ul className='flex gap-4 md:gap-14'>
        <li className='text-white hover:font-bold cursor-pointer'>Home</li>
        <li className='text-white hover:font-bold cursor-pointer'>About Us</li>
        <li className='text-white hover:font-bold cursor-pointer'>Contact Us</li>
      </ul>
      <button className='bg-orange-600 rounded-full text-white text-sm md:text-base flex items-center px-4 py-2'>
        Login <IoLogIn className='ml-3 text-[20px]' />
      </button>
    </div>
  );
}

export default Header;
