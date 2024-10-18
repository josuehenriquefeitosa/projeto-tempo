/* eslint-disable react/prop-types */
import "./WeatherInformations5Days.css";



export const WeatherInformations5Days = ({ weather5Days }) => {
  let dailyForecast = {};

  for (let forescast of weather5Days.list) {
    const date = new Date(forescast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forescast;
    }
  }

  const nextFiveDays = Object.values(dailyForecast).slice(1, 6);
  console.log(nextFiveDays);

  const convertDate = (date) => {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "2-digit",
    });
    return newDate;
  };

  return (
    <div className="weather-container">
      <h3>Previsão Próximos 5 dias</h3>
      <div className="weather-list">
        {nextFiveDays.map((forecast) => (
          <div key={forecast.dt} className="weather-item">
            <p>{convertDate(forecast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt=""
              />
            <p>{forecast.weather[0].description}</p>
            <p>
              {Math.round(forecast.main.temp_min)}ºC /{" "}
              {Math.round(forecast.main.temp_max)}ºC
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};
