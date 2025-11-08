import React from 'react'

const MovieCards = ({movies}) => {
  return (
    <div className='flex flex-wrap justify-center px-4.5 gap-6 h-fit w-full'>
        {movies && movies.map((ele, idx) => {
          return <div key={idx}
            className='flex flex-col justify-between border  w-[18vw] p-2 '>
            <div>
              <img src={ele.Poster} alt='Image NOt Found' className='w-full h-auto object-cover' />
            </div>
            <div >
              <h1 className='font-semibold'>Title: {ele.Title}</h1>
              <h1>Year: {ele.Year}</h1>
              <h1>Type: {ele.Type}</h1>
            </div>
          </div>
        })}
      </div>
  )
}

export default MovieCards