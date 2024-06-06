

import Foter from './components/Foter'
import Header from './components/header'
import WeatherFiveDays from './components/WeatherFiveDays'
import WeatherInformation from './components/WeatherInformation'
import { WeatherProvider } from './hooks/WeatherHook'

function App() {

  return (
    <>
      <main className=' max-w-1440px mx-full  font-Raleway relative'>
        <div>

          <WeatherProvider>
            <Header />

            <WeatherFiveDays />

            <WeatherInformation />

            <Foter />
          </WeatherProvider>

        </div>
      </main>
    </>
  )
}

export default App