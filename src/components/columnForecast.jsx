export const NewColumn = ({ forecast }) => {
  // console.log(forecast)
  return (
    <div className='forecast-column'>
      <p className='forecast-date'>{forecast.date}</p>
      <p className='forecast-day'>{forecast.day}</p>
      <img src={forecast.img} />
      <div className='forecast-info-column'>
        <p className='info-column-item'>T: {forecast.temp}</p>
        <p className='info-column-item'>TMax: {forecast.tmax}</p>
        <p className='info-column-item'>TMin: {forecast.tmin}</p>
        <p className='info-column-item'>WS: {forecast.ws}</p>
      </div>
    </div>
  )
}