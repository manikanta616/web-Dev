import React, { useContext } from 'react'
import { ApiContext } from '../Context/APIcontext'
import MovieCard from '../Components/MovieCard'

const Home = () => {

    const {movies} = useContext(ApiContext)

    if(!movies || movies.length === 0){
        return <div className=' flex flex-col items-center h-screen text-white  pt-70 md:pl-90 text-2xl gap-2 '>
         <div className='flex justify-center p-5 md:p-0'>
           <h1 className='text-xl md:text-5xl'>Your movie journey stays synced right <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inside your browser —<br />&nbsp;&nbsp;&nbsp; SIMPLE, FAST, and EFFORTLESS.</h1>
         </div>
            <h1 className='text-xl md:text-4xl'>Discover Movies</h1>
            <h1 className='text-xl md:text-3xl'>Explore Details</h1>
            <h1 className='text-xl md:text-2xl'><span className='text-red-400 text-3xl font-semibold'>Save</span>  your favorites</h1>
            <h1><span className='text-green-400 font-semibold'>Add </span>films to your <span>Wishlist</span></h1>
            <h1><span className='text-blue-500 font-semibold'>Add </span>films to your <span>Watchlater</span></h1>
            
        </div>
    }


  return (
    <div className=' pt-75 pl-14 gap-5 md:pl-[25vw] md:items-start md:pt-35'>
        <MovieCard/>
    </div>
  )
}

export default Home