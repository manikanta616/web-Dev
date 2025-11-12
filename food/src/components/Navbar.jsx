import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='bg-[#FAEFDF] flex justify-between items-center px-10'>
            <div className='flex pl-15'>
                <Link to='/'>
                    <img src={logo} alt="food items" className='h-[12vw] hover:scale-95' />
                </Link>
            </div>

            <div className='flex gap-4 font-semibold text-sm md:text-xl'>
                <Link to='/' className='hover:border hover:bg-[#FEC062] hover:p-3 hover:rounded-2xl '>Home</Link>
                <Link to='/category' className='hover:border hover:bg-[#FEC062] hover:p-3 hover:rounded-2xl'>All Categories</Link>
                <Link to='/favourites' className='hover:border hover:bg-[#FEC062] hover:p-3 hover:rounded-2xl'>Favourites</Link>
            </div>
        </div>
    )
}

export default Navbar