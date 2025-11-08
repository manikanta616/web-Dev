import React, { useState, useContext } from 'react'
import { SearchContext } from './searchContext'

const Header = () => {

    const {search, setSearch} = useContext(SearchContext)



    return (
        <div className='h-[50vh] flex flex-col justify-center items-center gap-5'>
            
                <div>
                    <h1 className='text-8xl'>Get Your Movie</h1>
                </div>
                <div>
                    <input type="text" placeholder='Enter Name of Movie' value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }} className='border-2 rounded-2xl px-3 py-3 h-[7vh] w-[35vw]'
                    />
                    <button>Search</button>
                </div>
            
        </div>
    )
}

export default Header