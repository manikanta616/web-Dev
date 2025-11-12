import React, { useContext } from 'react'
import { ApiContext } from '../API'
import { Link } from 'react-router-dom'

const FoodCard = () => {

  const { searchResults, favourites, addToFavourites, removeFromFavourites } = useContext(ApiContext)
  return (
    <div className='px-15'>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {searchResults.map((meal) => {
          const isFav = favourites.some(fav => fav.idMeal === meal.idMeal);

          return <div key={meal.idMeal} className="border rounded-xl p-3 text-center bg-[#FEC264]  hover:scale-104">
            <Link to={`/home/${meal.idMeal}`}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-40 h-40 object-cover mx-auto rounded-lg"
              />
            </Link>
            <h3 className="mt-2 font-semibold text-2xl">{meal.strMeal}</h3>
            <button onClick={() => {
              isFav ? removeFromFavourites(meal.idMeal) : addToFavourites(meal);
            }} className={`hover:cursor-pointer active:scale-90 `}>{isFav ? 'Remove ' : 'Add'}</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default FoodCard