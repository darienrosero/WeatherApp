

import Foter from './components/Foter'
import Header from './components/Header'
import WeatherFiveDays from './components/WeatherFiveDays'
import WeatherInformation from './components/WeatherInformation'

function App() {

  return (
    <>
      <main className=' max-w-1440px mx-full  font-Raleway relative'>
        <div>

            <Header />

            <WeatherFiveDays />

            <WeatherInformation />

            <Foter />

        </div>
      </main>
    </>
  )
}

export default App