import React, { useContext } from 'react'
import searchicon from '../assets/search-icon.png'
import { ApiContext } from '../API'
import FoodCard from '../components/FoodCard';
const Home = () => {

  const { searchText, setsearchText, getSearch, searchResults } = useContext(ApiContext);

  const getData = ()=>{
    getSearch()
  }

  return (
    <div className='flex flex-col   items-center bg-[#de914e] min-h-screen pb-[4vh] '>

      <div className='mt-7 mb-5'>
        <h1 className='text-9xl font-semibold font-serif text-black '>Get Your Food </h1>
      </div>

      <div className='flex items-center '>
        <form onSubmit={(e)=>{e.preventDefault()}} className='flex items-center border-2'>

          <input type="text" placeholder='Search' className='pl-7 border-none focus:outline-none w-[40vw] h-[5vh] text-white' value={searchText}  onChange={(e)=>{setsearchText(e.target.value)}}/>

          <button onClick={getData} className='active:scale-90 hover:cursor-pointer'><img src={searchicon} className='h-[4vh] pr-2'/></button>
        </form>
      </div>

      <div>
        <FoodCard/>
      </div>
    </div>
  )
}

export default Home