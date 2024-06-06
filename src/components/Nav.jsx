import React, { useState } from 'react';
import Geolocation from './Geolocation';

import Modal from './Modal';

const Nav = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className='flex justify-between p-8 items-center '>
        <button
          className='bg-grey-R w-[160px] h-9 rounded-lg text-white-R cursor-pointer'
          onClick={toggleModal}
        >
          Search for places
        </button>

        
          <Geolocation />
       
      </nav>

      <Modal

        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        location={location}
        setLocation={setLocation}

      />

    </>
  );
};

export default Nav;

