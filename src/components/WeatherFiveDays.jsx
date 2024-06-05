import Targetdaly from './Targetdaly'
import Temperatura from './Temperatura'

const WeatherFiveDays = () => {

    return (

        <>
            <section className='mt-[769px] max-w-1440px right-0 mx-auto absolute w-full  bg-dark-blue font-Raleway flex justify-center p-10 text-white-R
          sm:flex sm:w-[1011px] sm:mt-0 sm:h-[979px] '>

                <div className='w-[290px] h-[650px] flex flex-col justify-between items-center
            sm:w-[800px] sm:h-[200px]  '>

                    <Temperatura />

                    <div className='w-[290px] h-[620px] flex flex-wrap justify-between items-center
            sm:w-[800px] sm:h-[200px]  '>
                        <Targetdaly />
                        <Targetdaly />
                        <Targetdaly />
                        <Targetdaly />
                        <Targetdaly />
                    </div>

                </div>
            </section>
        </>

    )
}

export default WeatherFiveDays
