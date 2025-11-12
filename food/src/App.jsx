import React from 'react'
import Categories from './pages/Categories'
import Search from './pages/Search'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ItemDetails from './pages/ItemDetails'
import Favourites from './pages/Favourites'
import CategoryItems from './pages/CategoryItems'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Categories/>}/>
        <Route path='/category/:name' element={<CategoryItems/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/home/:idMeal' element={<ItemDetails/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
      </Routes>
    </div>
  )
}

export default App