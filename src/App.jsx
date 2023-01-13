import { useState } from 'react'
import './App.css'

import { NewColumn } from './components/columnForecast'
import { fetchApi } from './api/fetchApi'

function App() {

  const [city, setCity] = useState('')

  const handleChange = (e) => {
    setCity(e.target.value)
    // console.log(city)
  }

  let forecasts = [
    {
    date : '11-J-23',
    day : 'Monday',
    img : 'src/assets/cloud_sun_sunny_weather_icon.svg',
    temp : '28 C',
    tmax : '30 C',
    tmin : '8 C',
    ws : '20 km/h'
  },
  {
    date : '11-J-23',
    day : 'Monday',
    img : 'src/assets/cloud_sun_sunny_weather_icon.svg',
    temp : '28 C',
    tmax : '30 C',
    tmin : '8 C',
    ws : '20 km/h'
  },
  {
    date : '11-J-23',
    day : 'Monday',
    img : 'src/assets/cloud_sun_sunny_weather_icon.svg',
    temp : '28 C',
    tmax : '30 C',
    tmin : '8 C',
    ws : '20 km/h'
  },
  {
    date : '11-J-23',
    day : 'Monday',
    img : 'src/assets/cloud_sun_sunny_weather_icon.svg',
    temp : '28 C',
    tmax : '30 C',
    tmin : '8 C',
    ws : '20 km/h'
  },
  {
    date : '11-J-23',
    day : 'Monday',
    img : 'src/assets/cloud_sun_sunny_weather_icon.svg',
    temp : '28 C',
    tmax : '30 C',
    tmin : '8 C',
    ws : '20 km/h'
  }
]

  const handleClick = async(e) => {
    e.preventDefault()
    let res = await fetchApi(city.trim())
    console.log(res.data[0])
    console.log(res.data[0].latitude.toString())
    console.log(res.data[0].longitude.toString())
  }

  return (
    <div className="App">
      <div className='navbar'>
        <img src='src/assets/cloud_sun_sunny_weather_icon.svg' alt='logo weatherApp' />
        <p>Weather App</p>
      </div>
      <form className='searchbar'>
        <label htmlFor="input-form-city">Find your city</label>
        <input id='input-form-city' value={city} type="text" name="city" onChange={handleChange}></input>
        <input id='button-search' onClick={handleClick} type='button' value={`Search`}></input>
      </form>
      <div className='data'>
        <div className='data-current'>
          <p className='title'>Current</p>
          <div id='container-current'>
            <div id='current-first'>
              <p>Date</p>
              <p>City</p>
            </div>
            <div id='current-second'>
              <div className='current-info'>
                <p>Max</p>
                <p>Min</p>
                <p>Wind Speed</p>
              </div>
              <div className='current-info'>
                <p>Imagen</p>
                <p>Temperature</p>
              </div>
            </div>
          </div>
        </div>
        <div className='data-forecast'>
          <p className='title'>Forecast</p>
          <div id='container-forecast'>
            {forecasts.map((cast, i) => {
            // console.log(cast)
              return <NewColumn forecast={cast} key={i} ></NewColumn>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
