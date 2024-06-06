import React, { useState } from 'react'

const Temperatura = () => {

    const [button1, setButton1] = useState(true)
    const [button2, setButton2] = useState(true)

    const handleClick2 = () => {
        setButton2(!button2)
    }


    const handleClick = () => {
        setButton1(!button1);
    };

    return (

        <div className='w-[290px] h-8 flex place-content-end mb- 
    sm:w-[800px] sm:h-8 sm:mb-5 '>
            <button onClick={handleClick} className={` bg-grey-F font-bold rounded-[100%] ml-3 w-8 h-8 flex justify-center items-center cursor-pointer transition-all duration-300 ${button1 ? 'text-white-R bg-dark-blue' : 'text-dark-blue bg-white-R'} `}>
                °C
            </button>
            <button onClick={handleClick2} className={` bg-grey-F font-bold rounded-[100%] ml-3 w-8 h-8 flex justify-center items-center cursor-pointer transition-all duration-300 ${button2 ? 'text-white-R bg-dark-blue' : 'text-dark-blue bg-white-R'} `}>
                °F
            </button>
        </div>

    )
}

export default Temperatura
