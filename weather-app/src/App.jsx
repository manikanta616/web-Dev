import axios from 'axios'
import React, { useState } from 'react'
import WeatherCard from './components/WeatherCard'
import bg from './assets/cirrus-clouds.jpg'


const Form = () => {

    const [city, setcity] = useState('')
    const [weather, setweather] = useState()

    const weatherData = async () =>{
        const API_KEY = 'd2bc9ce5e3084d099285fe1d8a34001d'
        try{
        const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        
        setweather(response.data)    
        console.log(response)
        setcity('')
        
        }
        catch(error){
        alert('Enter valid city')
        }
    }


  return (
    <div className='min-h-screen bg-cover bg-center' style={{backgroundImage: `url(${bg})`}}>
        <div className='bg-[#639BC9] text-white h-150 w-120 rounded-3xl flex flex-col gap-19 pt-5 absolute md:left-[34%] md:top-[11%] sm:left-[20%] sm:top-[7%] left-[14%] top-[4%]'>
        <form onSubmit={(e)=>{e.preventDefault()}}>

          <div className='flex justify-center text-3xl'>
            <input type='text' placeholder='Enter city' value={city}
              className='border-2 rounded-2xl p-2'
              onChange={(e)=>{
                  setcity(e.target.value)
              }}/>
          </div>

        </form>

        <div className='flex justify-center'>
          <WeatherCard  weather={weather} />    
        </div>

        <div className='flex justify-center text-black'>
          <button onClick={()=>{weatherData()}}
          className='border-2 w-40 h-10 rounded-2xl font-semibold text-xl bg-blue-100'
          
        >Get Forecast</button>
        </div>
      </div>
    </div>
  )
}

export default Form