import React, { useContext } from "react";
import { ApiContext } from "../API";
import { Link } from "react-router-dom";

const Favourites = () => {
  const { favourites, removeFromFavourites } = useContext(ApiContext);

  if (favourites.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">No Favourites Yet 💔</h1>
        <p className="text-lg">Go save some meals you like!</p>
      </div>
    );
  }

  return (
    <div className="px-10 py-6 bg-[#de914e] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Favourites ❤️</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {favourites.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-[#FEC264] rounded-xl p-3 text-center shadow-lg hover:scale-105 transition"
          >
            
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-40 h-40 mx-auto rounded-lg object-cover"
              />
            

            <h3 className="mt-2 font-semibold text-lg">{meal.strMeal}</h3>

            <button
              onClick={() => removeFromFavourites(meal.idMeal)}
              className="bg-red-500 text-white px-4 py-1 rounded-lg mt-2 hover:scale-105 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
