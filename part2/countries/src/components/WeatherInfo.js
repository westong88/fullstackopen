import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherInfo = ({country}) => {

    const [weather, setWeather] = useState(null)
    const hook = () => {
        console.log('effect')
        axios
          .get(`http://api.weatherstack.com/current?access_key=e97802e0881c70ce8cd9758e71c637d5&query=${country.name}`)
          .then(response => {
            console.log('promise fulfilled')
            setWeather(response.data)
          })
      }
      useEffect(hook, [])

      if(weather){
          return(
              <div>
              <h2>Weather in {country.capital}</h2>
              <p><b>temperature: </b>{weather.current.temperature}</p>
              <img
                src={weather.current.weather_icons}
                style={{ maxWidth: 100, height: 'auto' }}
            />
              <p><b>wind: </b>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
              </div>
          )
      }else{
          return(<p>Weather Loading...</p>)
      }
}

export default WeatherInfo