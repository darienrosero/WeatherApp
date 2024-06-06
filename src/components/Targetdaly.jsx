import React, { useContext, useState } from 'react'
import { WeatherContext } from '../hooks/WeatherHook';



const Targetdaly = () => {

    const { weatherData, loading, error } = useContext(WeatherContext)
    const [unit, setUnit] = useState('C')

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const dailyForecasts = weatherData.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));
    console.log(dailyForecasts)

    const convertTemperature = (temp) => {
        return unit === 'C' ? Math.round(temp - 273.15) : Math.round((temp - 273.15) * 9 / 5 + 32);
    };

    return (

        <section className='mt-[810px] max-w-1440px right-0 mx-auto absolute w-full  bg-dark-blue font-Raleway flex justify-center p-10 text-white-R
        sm:flex sm:flex-col sm:justify-start sm:items-center sm:w-[1011px] sm:h-[979px] sm:mt-0 '>

            <div className='w-[290px] min-w-[290px] h-[650px] flex flex-col justify-between items-center
            sm:w-[800px] sm:h-[200px]  '>
                <div className='w-[290px] h-8 flex place-content-end mb- 
    sm:w-[800px] sm:h-8 sm:mb-5 '>
                    <button
                        className={`bg-grey-F font-bold rounded-[100%] ml-3 w-8 h-8 flex justify-center items-center cursor-pointer ${unit === 'C' ? 'bg-white-R text-dark-blue' : 'bg-grey-F'}`}
                        onClick={() => setUnit('C')}
                    >°C</button>
                    <button
                        className={`bg-grey-F font-bold rounded-[100%] ml-3 w-8 h-8 flex justify-center items-center cursor-pointer ${unit === 'F' ? 'bg-white-R text-dark-blue' : 'bg-grey-F'}`}
                        onClick={() => setUnit('F')}
                    >°F</button>

                </div>

                <div className='w-[290px] h-[620px] flex flex-wrap justify-between items-center
            sm:w-[800px] sm:h-[200px] sm:flex  '>
                    {dailyForecasts.slice(0, 5).map((forecast, index) => (
                        <div key={index} className='w-[130px] h-[177px] bg-grey-blue rounded-2xl text-center p-4'>

                            <p>{new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="heavy rain" className='w-[70px] right-0 left-0 mx-auto ' />
                            <div className='flex w-30 mt-3 justify-around'>
                                <div><span>{convertTemperature(forecast.main.temp_max)}°{unit}</span> {convertTemperature(forecast.main.temp_min)}°{unit}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Targetdaly
