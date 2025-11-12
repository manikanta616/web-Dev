import React, { useContext } from 'react'
import { ApiContext } from '../API'

const Search = () => {

    const {search} = useContext(ApiContext)

  return (
    <div style={{margin:20}}>
        {search.map(function(e,i){
            return <div key={i}>
                <h1>{e.strMeal}</h1>
            </div>
        })}
    </div>
  )
}

export default Search