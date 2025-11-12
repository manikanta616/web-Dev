import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemDetails = () => {
  const { idMeal } = useParams();        // get meal ID from URL
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeal() {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        setMeal(res.data.meals ? res.data.meals[0] : null);
      } catch (err) {
        console.error("Error fetching meal:", err);
      } finally {
        setLoading(false);
      }
    }

    if (idMeal) fetchMeal();
  }, [idMeal]); // refetch when URL changes

  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;
  if (!meal) return <div className="text-center mt-10 text-xl">Meal not found</div>;

  return (
    <div className="px-10 py-6 bg-[#de914e] min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-80 h-80 mx-auto rounded-xl object-cover shadow-lg"
      />
      <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto text-left bg-[#fec264] p-4 rounded-xl">
        {meal.strInstructions}
      </p>
      <h3 className="mt-8 text-2xl font-semibold">Category: {meal.strCategory}</h3>
      <h3 className="mt-2 text-2xl font-semibold">Area: {meal.strArea}</h3>
    </div>
  );
};

export default ItemDetails;
