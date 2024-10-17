import { useState, useRef } from 'react'
import axios from 'axios'
import { WeatherInformations } from './components/WeatherInformations/WeatherInformations'
import './App.css'

function App() {
  const [weather, setWeather] = useState()
  const inputRef = useRef()


  const searchCity = async () =>{
    const city = inputRef.current.value
    const key = '14186e9971c29657bde43867324154be';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
    
    

  }



  return (
    <div>
      <h1>previsão tempo</h1>
      <input ref={inputRef}  type='text' placeholder='digite sua cidade'/>
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather} />}
    </div>
  )
}

export default App
