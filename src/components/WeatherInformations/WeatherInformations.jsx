/* eslint-disable react/prop-types */

export const WeatherInformations = ({weather})=>{

    console.log(weather.weather[0])
    return (
        <div>
            <h2>{weather.name}</h2>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                <p>{Math.round(weather.main.temp)}ºC</p>
            </div>

            <p>{weather.weather[0].description}</p>
            <div>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}</p>
                <p>Umidade: {}</p>
                <p>Pressão : {}</p>
            </div>
        </div>
    )
}
 

