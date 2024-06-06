import React from 'react'
import iconNavegation from '../../public/icons8-navigation-30.png'

const WeatherInformation = () => {
    return (

        <>

            <section className='mt-[1467px] max-w-1440px right-0 mx-auto absolute w-full  bg-dark-blue font-Raleway p-10 text-white-R
          sm:mt-[300px] sm:w-[1010px] sm:h-[380px] '>
                <p className='w-[250px] text-[28px] '>
                    Today’s Hightlights
                </p>
                <div className='pt-7 h-auto
            sm:w-[700px] sm:flex sm:flex-wrap sm:justify-between sm:right-0 sm:left-0 sm:mx-auto '>
                    <div className='h-[204px] bg-grey-blue mb-6 rounded-2xl text-center p-4 text-[16px] 
              sm:w-[328px] sm:h-[204px] '>
                        <p>Wind status</p>
                        <p className='text-[64px] '>7mph</p>
                        <div className='flex justify-around right-0 left-0 mx-auto items-center w-[100px] '>
                            <img src={iconNavegation} alt="icon direccion wind" className='w-9 opacity-65 ' />
                            <p className='text-[18px] '>WSW</p>
                        </div>
                    </div>

                    <div className='h-[204px] bg-grey-blue mb-6 rounded-2xl text-center p-4 text-[16px] 
              sm:w-[328px] sm:h-[204px] '>
                        <p>Humidity</p>
                        <p className='text-[64px] '>84%</p>
                        <div className='flex justify-around right-0 left-0 mx-auto items-center w-[170px] bg-light-yeloow rounded-xl h-4
                sm:bg-light-yeloow sm:w-[240px] sm:rounded-2xl sm:h-4 '>
                            <p>i</p>
                        </div>
                    </div>

                    <div className='h-[204px] bg-grey-blue mb-6 rounded-2xl text-center p-4 text-[16px] 
              sm:w-[328px] sm:h-[159px] '>
                        <p>Visibility</p>
                        <p className='text-[64px] '>6,4 miles</p>
                    </div>

                    <div className='h-[204px] bg-grey-blue mb-6 rounded-2xl text-center p-4 text-[16px] 
              sm:w-[328px] sm:h-[159px] '>
                        <p>Air Pressure</p>
                        <p className='text-[64px] '>998 mb</p>

                    </div>
                </div>
            </section>

        </>

    )
}

export default WeatherInformation
