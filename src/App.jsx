import { useState, useRef } from 'react'
import axios from 'axios'
import { WeatherInformations } from './components/WeatherInformations/WeatherInformations'
import { WeatherInformations5Days } from './components/WeatherInformations5Days/WeatherInformations5Days'
import './App.css'
import './index.css'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

  const searchCity = async () =>{
    const city = inputRef.current.value
    const key = '14186e9971c29657bde43867324154be';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)
    
    console.log(apiInfo5Days.data)
    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)

  }



  return (
    <div className='container'>
      <h1>Previsão tempo</h1>
      <div className='search'>
        <input ref={inputRef}  type='text' placeholder='digite sua cidade'/>
        <button onClick={searchCity}>Buscar</button>
      </div>

      {weather && <WeatherInformations weather={weather} />}
      {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}
    </div>
  )
}

export default App
