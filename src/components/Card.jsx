import React from 'react'

import clouds from '../assets/public/Cloud-background.png'
import iconWheather from '../assets/public/LightCloud.png'
import iconLocation from '../assets/public/ubication.png'

const Card = () => {
  return (

    <>
    
    <div className='w-full h-[326px] relative mt-1'>
        <figure className='h-full w-full absolute '>
          <img src={clouds} alt="clouds bg" className='object-cover w-full h-full opacity-15 ' />
        </figure>
        <figure className='w-40 absolute mt-[55px] right-0 left-0 mx-auto ' >
          <img src={iconWheather} alt="wheather" />
        </figure>
      </div>

      <div className='text-white-R flex flex-col absolute right-0 left-0 mx-auto '>
        <div className='flex justify-center items-center h-[144px] '>
          <p className='text-[144px] sm:text-[170px] '>15</p>
          <p className='text-[60px] text-grey-L mt-[70px] sm:text-[90px] ' > °C </p>
        </div>

        <div>
          <p className='text-center text-[35px] text-grey-L font-bold mt-8 sm:mt-20 sm:text-[65px] '>Shower</p>
        </div>

        <div className='right-0 left-0 mx-auto w-[150px] mb-10 mt-6'>
          <div className='flex justify-around h-[25px] sm:mt-10 '>
            <p>Today</p>
            <p className='font-bold text-[24px] flex  justify-center items-center  '>.</p>
            <p>Fri 5 Jun </p>
          </div>
          <div className='flex justify-center mt-5'>
            <img src={iconLocation} alt="location" className='w-6' />
            <p>Helsinki</p>
          </div>
        </div>
      </div>
    
    </>

  )
}

export default Card