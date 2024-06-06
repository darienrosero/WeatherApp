import React, {useContext} from 'react'
import iconNavegation from '../../public/icons8-navigation-30.png'
import { WeatherContext } from '../hooks/WeatherHook'

const WeatherInformation = () => {

    const { weatherData, loading, error } = useContext(WeatherContext);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const currentWeather = weatherData.list[0];

    return (

        <>

            <section className='mt-[1520px] max-w-1440px right-0 mx-auto absolute w-full  bg-dark-blue font-Raleway p-10 text-white-R
          sm:mt-[300px] sm:w-[1010px] sm:h-[380px] '>
                <p className='w-[250px] text-[28px] '>
                    Today’s Hightlights
                </p>
                <div className='pt-7 h-auto
            sm:w-[800px] sm:flex sm:flex-wrap sm:justify-between sm:right-0 sm:left-0 sm:mx-auto '>
                    <div className='h-[204px] bg-grey-blue mb-6 rounded-2xl text-center p-4 text-[16px] 
              sm:w-[385px] sm:h-[230px] '>
                        <p>Wind status</p>
                        <p className='text-[64px] '>{currentWeather.wind.speed} mph</p>
                        <div className='flex justify-around right-0 left-0 mx-auto items-center w-[100px] '>
                            <img src={iconNavegation} alt="icon direccion wind" className='w-9 opacity-65 ' />
                            <p className='text-[18px] '>{currentWeather.wind.deg} °</p>
                        </div>
                    </div>

                    <div className='h-[204px] bg-grey-blue mb-6 rounded-2xl text-center p-4 text-[16px] 
              sm:w-[385px] sm:h-[230px] '>
                        <p>Humidity</p>
                        <p className='text-[64px] '>{currentWeather.main.humidity} %</p>
                        <div className="flex flex-col items-center mt-4">
                        <div className="flex justify-between w-full mb-2">
                            <span>0</span>
                            <span>50</span>
                            <span>100</span>
                        </div>
                        <div className="w-[358] rounded-full bg-grey-L h-2">
                            <div className="bg-light-yeloow h-2 rounded-full text-grey-blue b " style={{ width: `${currentWeather.main.humidity}%` }}>________________________________________</div>
                        </div>
                        <span className="self-end mt-1 flex">%</span>
                    </div>
                    </div>

                    <div className='h-[204px] bg-grey-blue mb-6 rounded-2xl text-center p-4 text-[16px] 
              sm:w-[385px] sm:h-[159px] '>
                        <p>Visibility</p>
                        <p className='text-[64px] '>{(currentWeather.visibility / 1609.344).toFixed(1)} miles</p>
                    </div>

                    <div className='h-[204px] bg-grey-blue mb-6 rounded-2xl text-center p-4 text-[16px] 
              sm:w-[385px] sm:h-[159px] '>
                        <p>Air Pressure</p>
                        <p className='text-[64px] '>{currentWeather.main.pressure} mb</p>

                    </div>
                </div>
            </section>

        </>

    )
}

export default WeatherInformation
