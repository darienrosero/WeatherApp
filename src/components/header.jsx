import React, {useContext, useState} from 'react'
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

      <header className='min-w-[381px] mx-w-[430px] absolute w-full h-[850px] bg-grey-blue
    sm:w-[430px] sm:h-[979px] '>

        <Nav />
        <Card weatherData={weatherData} toggleModal={toggleModal}/>

      </header>

    </>

  )
}

export default Header
