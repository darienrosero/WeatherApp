

import Foter from './components/Foter'
import Header from './components/header'
import Targetdaly from './components/Targetdaly'
import WeatherInformation from './components/WeatherInformation'
import { WeatherProvider } from './hooks/WeatherHook'

function App() {

  return (
    <>
      <main className=' max-w-1440px mx-full  font-Raleway relative'>
        <div>

          <WeatherProvider>
            <Header />

            <Targetdaly />

            <WeatherInformation />

           {/*  <Foter /> */}
          </WeatherProvider>

        </div>
      </main>
    </>
  )
}

export default App