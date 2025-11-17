import { createContext, useContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) =>{

    const [wishlist, setwishlist] = useState(()=>{
        const saved = localStorage.getItem('wishlist')
        return saved && saved !== "undefined" ? JSON.parse(saved) : [];
    })

    useEffect(()=>{
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    },[wishlist])

    function addToWishlist(movie){
        setwishlist((prev)=>{
            if(prev.find((title)=>title.imdbID === movie.imdbID)) return prev
            return [...prev,movie]

        })
    }

    function removeFromWishlist(id){
        setwishlist((prev)=>(prev.filter((title)=>title.imdbID !== id)))
    }

    const [watched, setwatched] = useState(()=>{
        const saved = localStorage.getItem('watched')
        return saved && saved !== "undefined" ? JSON.parse(saved) : [];
    })

    useEffect(()=>{
        localStorage.setItem('watched',JSON.stringify(watched))
    },[watched])

    function addToWatched(movie){
        setwatched((prev)=>{
            if(prev.find((title)=> title.imdbID === movie.imdbID)) return prev
            return [...prev,movie]

        })
    } 
    function removeFromWatched(id){
        setwatched((prev)=>(prev.filter((item)=>(item.imdbID !== id))))
    }

    const [watchlater, setwatchlater] = useState(()=>{
        const saved = localStorage.getItem('watchlater')
        return saved && saved !== "undefined" ? JSON.parse(saved) : [];
    })

    useEffect(()=>{
        localStorage.setItem('watchlater',JSON.stringify(watchlater))
    },[watchlater])

    function addToWatchlater(movie){
        setwatchlater((prev)=>{
            if(prev.find((title)=>title.imdbID === movie.imdbID )) return prev
            return [...prev,movie]
        })
    }

    function removeFromWatchlater(id){
        setwatchlater((prev)=>(prev.filter(item => item.imdbID !== id)))
    }




    const value = {addToWishlist, removeFromWishlist, wishlist, setwishlist, watched, setwatched, addToWatched,removeFromWatched, addToWatchlater,removeFromWatchlater,watchlater,setwatchlater}


    return  <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}