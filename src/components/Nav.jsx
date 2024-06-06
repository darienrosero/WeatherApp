import React, { useContext, useState } from 'react';
import Geolocation from './Geolocation';

import { WeatherContext } from '../hooks/WeatherHook';
import { WeatherProvider } from '../hooks/WeatherHook';
import Modal from './Modal';

const Nav = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState('');
  const { fetchWeather, weatherData } = useContext(WeatherContext);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSearch = async () => {
    if (location.trim()) {
      await fetchWeather(location);
      setIsModalOpen(false);
    }
  };

  const handleQuickSearch = async (city) => {
    await fetchWeather(city);
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className='flex justify-between p-4 items-center sm:mt-8'>
        <button
          className='bg-grey-R w-[160px] h-9 rounded-lg text-white-R cursor-pointer sm:ml-5'
          onClick={toggleModal}
        >
          Search for places
        </button>

        <WeatherProvider>
          <Geolocation />
        </WeatherProvider>

      </nav>

      <Modal

        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        location={location}
        setLocation={setLocation}
        handleSearch={handleSearch}
        handleQuickSearch={handleQuickSearch}

      />

    </>
  );
};

export default Nav;

