import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


const Nav1 = () => {
  return (
    <div className='md:flex  md:w-full md:justify-between md:items-center md:pr-10 md:border-b-2 pb-5 bg-[hsl(194,84%,15%)] text-white'>
        <div className='flex justify-center p-3 pt-13 font-semibold md:pt-5'>
            <h1 className='text-4xl'><Link to='/'>Movie Search App</Link></h1>
        </div>
        <div className='md:w-[30vw]'>
            <SearchBar/>
        </div>
    </div>
  )
}

export default Nav1