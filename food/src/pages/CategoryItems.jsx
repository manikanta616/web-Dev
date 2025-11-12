import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ApiContext } from '../API';

const CategoryItems = () => {

  const { name } = useParams();
  const { categoryItems, setcategoryname, getCategoryItems, loading, favourites, addToFavourites, removeFromFavourites } = useContext(ApiContext)

  useEffect(() => {
    console.log("Setting categoryname to:", name);
    setcategoryname(name)
    getCategoryItems();


  }, [name])



  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  return (
    <div className="px-10 py-6 bg-[#de914e] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">{name}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categoryItems && categoryItems.length > 0 ? (
          categoryItems.map((item, index) => {
            const isFav = favourites.some(fav => fav.idMeal === item.idMeal);

            return <div
              key={index}
              className="bg-[#FEC264] rounded-xl p-3 text-center shadow-lg hover:scale-105 transition"
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-40 h-40 mx-auto rounded-lg object-cover"
              />
              <h3 className="mt-2 font-semibold text-lg">{item.strMeal}</h3>
              <button onClick={() => {
                isFav ? removeFromFavourites(item.idMeal) : addToFavourites(item);
              }} className='hover:cursor-pointer active:scale-90 '>{isFav ? 'Remove' : 'Add'}</button>
            </div>
          })
        ) : (
          <p className="text-center text-xl">No items found.</p>
        )}
      </div>
    </div>
  )
}

export default CategoryItems