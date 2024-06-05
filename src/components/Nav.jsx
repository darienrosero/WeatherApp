import React, { useState } from 'react';

import selectUbication from '../assets/public/icons8-location-off-64.png';
import iconSearch from '../assets/public/icons8-search-50.png'

const Nav = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <>
      <nav className='flex justify-between p-4 items-center sm:mt-8'>
        <button 
          className='bg-grey-R w-[160px] h-9 rounded-lg text-white-R cursor-pointer sm:ml-5'
          onClick={() => setMenuClick(true)}
        >
          Search for places
        </button>
        <div className='w-8 flex items-center sm:mr-5'>
          <button className='bg-grey-R rounded-[100%] cursor-pointer'>
            <img src={selectUbication} alt="ubication" />
          </button>
        </div>
      </nav>

      {menuClick && (
        <div className='fixed inset-0 bg-grey-blue bg-opacity-0 z-50'>
          <div className='absolute left-0 top-0 h-full bg-grey-blue p-10 shadow-lg w-full sm:w-[430px]'>
            <span 
              onClick={() => setMenuClick(false)} 
              className='text-white-R absolute right-8 top-8 cursor-pointer text-2xl'
            >
              &times;
            </span>
            <div className='flex justify-between h-[50px] w-[340px] mt-10 '>
            <div className='flex opacity-25 border-2 p-2 rounded-xl '>
              <img src={iconSearch} alt=""  className='w-9' />
              <input type="text" value={'search location'} className='bg-grey-blue text-white-R ' />
            </div>
            <button className='bg-skyBlue w-[73px] rounded-xl text-white-R '>Search</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;

