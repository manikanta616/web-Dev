import React, { useContext } from 'react'
import { MovieContext } from '../Context/MovieContext';
import { Link } from 'react-router-dom';

const WatchLater = () => {
  const {watched} = useContext(MovieContext)
  return (
    <div className='pt-75 pl-14  gap-5 md:pl-[25vw] md:items-start md:pt-35 min-h-screen max-h-full'>
      <div className='flex pl-9 mb-9'>
        <h1 className='text-5xl text-white'>Watched</h1>
      </div>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 text-white'>
        {watched.map((ele,id)=>{
        return <div key={id} >
          <Link to={`/home/${ele.imdbID}`}><img src={ele.Poster} alt="" className='' /></Link>
          <h1>Title:- {ele.Title}</h1>
        </div>
      })}
      </div>
    </div>
  )
}

export default WatchLater