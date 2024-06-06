import React, { useContext } from 'react'
import { WeatherContext } from '../hooks/WeatherHook';

import iconSearch from '../../public/icons8-search-50.png'

const Modal = ({ isModalOpen, toggleModal, location, setLocation}) => {
    const { fetchWeatherByCity } = useContext(WeatherContext); 

    const handleSearchButtonClick = () => {
        fetchWeatherByCity(location);
        toggleModal();
    };

    const handleLocationButtonClick = (city) => {
        fetchWeatherByCity(city);
        toggleModal();
    };

    const handleLocationInputChange = (e) => {
        setLocation(e.target.value);
        console.log(e)
    };


    return (
        <>

            <div className={`fixed inset-0 bg-grey-blue bg-opacity-0 z-50 transform ${isModalOpen ? 'translate-x-0' : '-translate-x-full'} `}>
                <div className='absolute left-0 top-0 h-full bg-grey-blue p-10 shadow-lg w-full sm:w-[430px]'>
                    <span
                        onClick={toggleModal}
                        className='text-white-R absolute right-8 top-8 cursor-pointer text-2xl'
                    >
                        &times;
                    </span>

                    <div className='flex justify-between h-[50px] w-[340px] mt-10 '>
                        <div className='flex opacity-25 border-2 p-2 rounded-xl '>
                            <img src={iconSearch} alt="" className='w-9' />
                            <input type="text" placeholder='Search location' className='bg-grey-blue text-white-R border-none focus:outline-none ' value={location}
                        onChange={handleLocationInputChange} />
                        </div>
                        <button className='bg-skyBlue w-[73px] relative rounded-xl text-white-R ' onClick={handleSearchButtonClick}>Search</button>
                    </div>

                    <div className='py-12 w-full h-[350px] '>
                        <ul className='absolute list-none w-[320px] h-[320px] flex flex-col place-content-between text-white-R '>
                            <li onClick={() => handleLocationButtonClick('London')} className={`h-[75px] flex items-center p-4 cursor-pointer  rounded-xl  `} >London</li>
                            <li onClick={() => handleLocationButtonClick('Barcelona')} className={`h-[75px] flex items-center p-4 cursor-pointer rounded-xl  `}>Barcelona</li>
                            <li onClick={() => handleLocationButtonClick('Long Beach')} className={`h-[75px] flex items-center p-4 cursor-pointer rounded-xl  `} >Long Beach</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal
