import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

export const ApiContext = createContext();

export const useApiContext = ()=> useContext(ApiContext);

export const ApiProvider = ({children}) =>{

    const [movies, setmovies] = useState([])
    const [search, setsearch] = useState('')
    const [movieIdPack, setmovieIdPack] = useState(null)
    const [movieID, setmovieID] = useState('')


     async function getMovie() {
        const apiKey = '70f54f5e'
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
            setmovies(response.data.Search || [])
            console.log(response)
        }
        catch (error) {
            console.error(error);
        }
    }

    async function getMovieID() {
        const apiKey = '70f54f5e'
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movieID}`)
            setmovieIdPack(response.data || [])
            console.log(response)
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        if(movieID){
            getMovieID();}
    },[movieID])
    

    const value={getMovie,setsearch,movies,movieIdPack,setmovieIdPack,getMovieID,setmovieID}

    return <ApiContext.Provider value={value}>
        {children}
    </ApiContext.Provider>
}