import React, { useState } from 'react'
import axios from 'axios'
import icon from './assets/search-icon.png'
import MovieCards from './components/MovieCards'

const App = () => {

  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  const Data = async () => {
    const apiKey = '70f54f5e'
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
    console.log(response.data);
    setMovies(response.data.Search)
    setSearch('')
  }

  return (
    <div className='pb-10'>
      <form onSubmit={(e) => { e.preventDefault() }}
        className='h-[50vh] flex flex-col justify-center items-center gap-7'
      >
        <div>
          <h1 className='text-8xl'>Get Your Movie</h1>
        </div>
        <div className='flex items-center border-2 rounded-2xl '>
          <input type="text" placeholder='Enter Name of Movie' value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }} className='border-none focus:outline-none px-3 py-3 h-[7vh] w-[35vw]'
          />
          <button onClick={Data}><img src={icon} className='h-9 pr-4' /></button>
        </div>
      </form>
      <MovieCards movies={movies}/>
    </div>
  )
}

export default App