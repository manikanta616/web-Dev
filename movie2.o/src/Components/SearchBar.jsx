import React, { useContext } from 'react'
import { ApiContext } from '../Context/APIcontext'

const SearchBar = () => {

    const {getMovie,setsearch} = useContext(ApiContext)

  return (
    <div className='border px-3 mx-3 mt-4 flex justify-between h-10  '>
        <input type='text' placeholder='Search' 
            onChange={(e)=>{setsearch(e.target.value)}}
            className='focus:outline-none '
            />
        <button onClick={()=>getMovie()}>Get</button>
    </div>
  )
}

export default SearchBar