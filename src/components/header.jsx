import React from 'react'
import Nav from './Nav'
import Card from './Card'

const Header = () => {

  return (

    <>

      <header className='absolute w-full h-[810px] bg-grey-blue
    sm:w-[430px] sm:h-[979px] '>

        <Nav />
        <Card />

      </header>

    </>

  )
}

export default Header
