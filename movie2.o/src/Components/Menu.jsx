import { Link } from 'react-router-dom'
import menu from '../assets/menu_icon.png'
import { useState } from 'react'

const Menu = () => {

    const [open, setopen] = useState(true)

    return (
        <div className='bg-[hsl(194,84%,15%)] p-5 h-23 md:pt-7 text-white'>
            <div>
                <button onClick={() => setopen(!open)}>
                    <img src={menu}
                        className='h-9 rounded-xl active:scale-90 hover:cursor-pointer hover:scale-105 ' />
                </button>
            </div>
            <div className={`flex flex-col items-center pt-15 gap-8 fixed left-0 md:mt-5  bg-[hsl(194,70%,32%)] w-[60vw] h-screen rounded-r-3xl md:w-[20vw] ${!open ? 'translate-x-0 md:-translate-x-full w-60' : '-translate-x-full w-60 md:translate-x-0'}`} >
                <Link to='/watchlater' className='hover:border hover:border-white hover:p-3 hover:rounded-2xl active:scale-105 active:border-2 active:p-3 active:rounded-2xl'> Watch Later</Link>
                <Link to='/watched' className='hover:border hover:border-white hover:p-3 hover:rounded-2xl active:scale-105 active:border-2 active:p-3 active:rounded-2xl'>Watched </Link>
                <Link to='wishlist' className='hover:border hover:border-white hover:p-3 hover:rounded-2xl active:scale-105 active:border-2 active:p-3 active:rounded-2xl'>WishList</Link>
            </div>
        </div>
    )
}

export default Menu