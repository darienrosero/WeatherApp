import React, { useState, useEffect } from 'react'

import clouds from '../../public/Cloud-background.png'
import iconLocation from '../../public/ubication.png'

const Card = ({ weatherData}) => {
  const [currentTemperature, setCurrentTemperature] = useState('');
  const [currentWeatherDescription, setCurrentWeatherDescription] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateWeather = () => {
        if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
            return;
        }
        
        const currentWeather = weatherData.list[0];

        if (!currentWeather.main || !currentWeather.weather || currentWeather.weather.length === 0) {
            return;
        }

        const temperature = currentWeather.main.temp;
        const weatherDescription = currentWeather.weather[0].description;
        const temperatureInCelsius = kelvinToCelsius(temperature);
        setCurrentTemperature(temperatureInCelsius.toFixed(2));
        setCurrentWeatherDescription(weatherDescription);

        // Actualizar la fecha actual
        setCurrentDate(getCurrentDate());
    };

    const kelvinToCelsius = (temp) => {
        return temp - 273.15;
    };

    const getCurrentDate = () => {
        const date = new Date();
        const options = { weekday: 'long', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    // Llamar a la función de actualización del clima cuando se monte el componente
    updateWeather();

    // Configurar un temporizador para que se actualice cada 3 horas
    const interval = setInterval(() => {
        updateWeather();
    }, 3 * 60 * 60 * 1000); // 3 horas en milisegundos

    // Limpiar el temporizador cuando el componente se desmonte para evitar fugas de memoria
    return () => clearInterval(interval);

}, [weatherData]);

  return (

    <>
    
    <div className='w-full h-[326px] relative mt-1'>
        <figure className='h-full w-full absolute '>
          <img src={clouds} alt="clouds bg" className='object-cover w-full h-full opacity-15  ' />
        </figure>
        <figure className='w-40 absolute mt-[55px] right-0 left-0 mx-auto xl:w-32 xl:right-0 xl:left-0 xl:mx-auto ' >
          <img src={`/public/${weatherData && weatherData.list && weatherData.list.length > 0 && weatherData.list[0].weather[0].icon}.png`} alt="wheather" />
        </figure>
      </div>

      <div className='text-white-R flex flex-col absolute right-0 left-0 mx-auto '>
        <div className='flex justify-center items-center h-[144px] '>
          <p className='text-[120px] sm:text-[120px]'>{currentTemperature}</p>
          <p className='text-[60px] text-grey-L mt-[70px] sm:text-[70px] '> °C </p>
        </div>

        <div>
          <p className='text-center text-[38px] text-grey-L font-bold mt-8 sm:mt-20 sm:text-[55px] '>{currentWeatherDescription}</p>
        </div>

        <div className='right-0 left-0 mx-auto w-[300px] mb-10 mt-6'>
          <div className='flex justify-around h-[25px] sm:mt-10 '>
            <p>{currentDate}</p>
          </div>
          <div className='flex justify-center right-0 left-0 mx-auto mt-5  '>
            <img src={iconLocation} alt="location" className='w-6' />
            <p className=''>{weatherData && weatherData.city && weatherData.city.name || 'Select a location'}</p>
          </div>
        </div>
      </div>
    
    </>

  )
}

export default Card
