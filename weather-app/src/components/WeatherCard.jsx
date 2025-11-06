import cloud from '../assets/cloud.png'

const WeatherCard = ({weather}) => {
  return (
    <>
        {weather && (
          <div className='text-xl flex flex-col gap-3'>
            <div className='flex justify-center pb-2 font-semibold text-4xl'>
                <h1 >City: {weather.name}</h1>
            </div>
            <div className='flex gap-12'>
                <h1>Lattitude: {weather.coord.lat}</h1>
                <h1>Longitude: {weather.coord.lon}</h1>
            </div>
            <div className='flex flex-col  pb-5 items-center'>
                <img src={cloud} alt='cloud image' className='h-30 w-29'></img>
                <h1>Clouds: {weather.weather[0].description}</h1>
            </div>
            <div className='flex gap-4 '>
                <h1>Temp: {weather.main.temp}</h1>
                <h1>Humidity: {weather.main.humidity}</h1>
                <h1>Wind: {weather.wind.speed}km</h1>
            </div>
          </div>
        )}
    </>
  )
}

export default WeatherCard