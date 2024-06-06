import React, { useContext, useState } from 'react'
import { WeatherContext } from '../hooks/WeatherHook';

import Nav from './Nav'
import Card from './Card'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { weatherData } = useContext(WeatherContext);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (

    <>

      <header className='absolute w-full h-[979px] bg-grey-blue
    md:min-w-[768px] md:max-w-[1023px] md:h-[979px]
    lg:min-w-[300px] 
    xl:w-[445px] '>

        <Nav />
        <Card weatherData={weatherData} toggleModal={toggleModal} />

      </header>

    </>

  )
}

export default Header
