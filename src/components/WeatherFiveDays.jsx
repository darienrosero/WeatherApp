import React from 'react'
import iconRain from '../assets/public/Thunderstorm.png'

const WeatherFiveDays = () => {
    return (

        <>
            <section className='mt-[769px] max-w-1440px right-0 mx-auto absolute w-full  bg-dark-blue font-Raleway flex justify-center p-10 text-white-R
          sm:flex sm:w-[1024px] sm:mt-0 sm:h-[979px] '>
                <div className='w-[290px] h-[620px] flex flex-wrap justify-between items-center
            sm:w-[800px] sm:h-[200px]  '>
                    <div className='w-[130px] h-[177px] bg-grey-blue rounded-2xl text-center p-4'>
                        <p>Tomorrow</p>
                        <img src={iconRain} alt="heavy rain" className='w-[70px] right-0 left-0 mx-auto ' />
                        <div className='flex w-30 mt-3 justify-around'>
                            <div>16°C</div>
                            <div>11°C</div>
                        </div>
                    </div>

                    <div className='w-[130px] h-[177px] bg-grey-blue rounded-2xl text-center p-4'>

                        <p>Tomorrow</p>
                        <img src={iconRain} alt="heavy rain" className='w-[70px] right-0 left-0 mx-auto ' />
                        <div className='flex w-30 mt-3 justify-around'>
                            <div>16°C</div>
                            <div>11°C</div>
                        </div>
                    </div>

                    <div className='w-[130px] h-[177px] bg-grey-blue rounded-2xl text-center p-4'>
                        <p>Tomorrow</p>
                        <img src={iconRain} alt="heavy rain" className='w-[70px] right-0 left-0 mx-auto ' />
                        <div className='flex w-30 mt-3 justify-around'>
                            <div>16°C</div>
                            <div>11°C</div>
                        </div>
                    </div>

                    <div className='w-[130px] h-[177px] bg-grey-blue rounded-2xl text-center p-4'>
                        <p>Tomorrow</p>
                        <img src={iconRain} alt="heavy rain" className='w-[70px] right-0 left-0 mx-auto ' />
                        <div className='flex w-30 mt-3 justify-around'>
                            <div>16°C</div>
                            <div>11°C</div>
                        </div>
                    </div>

                    <div className='w-[130px] h-[177px] bg-grey-blue rounded-2xl text-center p-4'>
                        <p>Tomorrow</p>
                        <img src={iconRain} alt="heavy rain" className='w-[70px] right-0 left-0 mx-auto ' />
                        <div className='flex w-30 mt-3 justify-around'>
                            <div>16°C</div>
                            <div>11°C</div>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}

export default WeatherFiveDays
