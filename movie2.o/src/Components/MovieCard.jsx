import React, { useContext, useEffect,useState } from 'react'
import { ApiContext } from '../Context/APIcontext'
import { Link } from 'react-router-dom'
import { MovieContext } from '../Context/MovieContext'



const MovieCard = () => {

    const {movies} = useContext(ApiContext)
    const {} = useContext(MovieContext)



  return (
    <div>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 text-white '>
            {movies.map((movie,id)=>{
                return <div key={id}>
                    <Link to={`/home/${movie.imdbID}`}><img src={movie.Poster} alt="" className='' /></Link>
                    <h1>Title:- {movie.Title}</h1>
                    
                    
                </div>
            })}
        </div>
    </div>
  )
}

export default MovieCard