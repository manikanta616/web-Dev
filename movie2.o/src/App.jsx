import Nav1 from './Components/Nav1'
import Menu from './Components/Menu'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import WatchLater from './Pages/WatchLater'
import Watched from './Pages/Watched'
import WishList from './Pages/WishList'
import MovieDetails from './Pages/MovieDetails'

const App = () => {
  return (
    <div >
      <div className='md:flex fixed w-full'>
        <Menu/>
        <Nav1/>
      </div>
      <div className='bg-[hsl(193,60%,11%)]'>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/home/:id' element={<MovieDetails/>}/>
          <Route path='/watchlater' element={<WatchLater/>}/>
          <Route path='/watched' element={<Watched/>}/>
          <Route path='/wishlist' element={<WishList/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App