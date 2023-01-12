import './App.css'

function App() {

  return (
    <div className="App">
      <div className='navbar'>
        <img src='src/assets/cloud_sun_sunny_weather_icon.svg' alt='logo weatherApp' />
        <p>Weather App</p>
      </div>
      <form className='searchbar'>
        <label>Find your city</label>
        <input id='input-form-city'></input>
        <input id='button-search' type='button' value={`Search`}></input>
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
          <p>Forecast</p>
          <div id='container-forecast'></div>
        </div>
      </div>
    </div>
  )
}

export default App
