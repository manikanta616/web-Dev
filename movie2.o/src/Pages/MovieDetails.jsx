import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../Context/APIcontext'
import { useParams } from 'react-router-dom'
import { MovieContext } from '../Context/MovieContext';

const MovieDetails = () => {

    const { id } = useParams();
    const { movieIdPack, setmovieID, movieID, } = useContext(ApiContext);
    const { addToWishlist, removeFromWishlist, wishlist, setwishlist, watched, setwatched, addToWatched, removeFromWatched, addToWatchlater, removeFromWatchlater, watchlater, setwatchlater } = useContext(MovieContext)

    const [isWish, setisWish] = useState(false)
    const [isWatched, setisWatched] = useState(false)
    const [isWatchlater, setisWatchlater] = useState(false)

    useEffect(() => {
        setisWish(wishlist.some(item => item.imdbID === id));
        setisWatched(watched.some(item => item.imdbID === id));
        setisWatchlater(watchlater.some(item => item.imdbID === id))
    }, [watched,wishlist,watchlater, id])




    useEffect(() => {
        setmovieID(id);
    }, [id]);

    if (!movieIdPack) {
        return <h1>Loading</h1>
    }


    return (
        <div className="pt-80 md:pt-40 md:pl-90 min-h-screen max-h-full pb-6 px-3 text-white flex flex-col items-center md:items-start gap-5">
            <h1 className="text-3xl lg:text-6xl">{movieIdPack.Title}</h1>
            <img src={movieIdPack.Poster} alt="" className="w-[250px]" />
            <p>{movieIdPack.Plot}</p>
            <p><strong>Director:</strong> {movieIdPack.Director}</p>
            <div className='flex gap-7'>
                <button 
                        onClick={() => (isWish ? removeFromWishlist(id) : addToWishlist(movieIdPack))} className='active:scale-75'>
                    {isWish ? 'Remove from wishlist' : 'Add to wishlist'}
                </button>
                
            </div>
            <div className='flex justify-center gap-7'>
                <button 
                        onClick={() => (isWatched ? removeFromWatched(id) : addToWatched(movieIdPack))}
                        className='active:scale-75'>
                    {isWatched ? 'Remove from Watched' : 'Add to watched'}
                </button>
                <button
                    onClick={()=>(isWatchlater ? removeFromWatchlater(id) : addToWatchlater(movieIdPack))} className='active:scale-75'>{isWatchlater ? 'Remove from watchlater' : 'Add to watchlater'}
                </button>
            </div>
        </div>
    );
}

export default MovieDetails
