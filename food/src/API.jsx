import { createContext, useContext, useState, useEffect, } from "react";
import axios from "axios";

export const ApiContext = createContext()

export const useApiContext = () => useContext(ApiContext)

export const ApiProvider = ({ children }) => {
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true)

    const [category, setcategory] = useState([])

    const [categoryname, setcategoryname] = useState('')
    const [categoryItems, setcategoryItems] = useState([])

    const [searchText, setsearchText] = useState('');
    const [searchResults, setsearchResults] = useState([]);
    const [itemById, setitemById] = useState('')
    const [IDitems, setIDitems] = useState([])

    async function getCategory() {

        try {
            setloading(true)

            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            setcategory(response.data.categories)
            //console.log(response)

            seterror(false)
        }
        catch (error) {
            console.error(error)
            seterror(true)
        }
    }
    async function getCategoryItems() {

        try {
            setloading(true)

            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryname}`)
            setcategoryItems(response.data.meals || [])
            console.log(response)

            seterror(false)
        }
        catch (error) {
            console.error(error)
            seterror(true)
        }
        finally {

            setloading(false);
        }
    }

    async function getSearch() {
        try {
            setloading(true);
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
            );
            setsearchResults(response.data.meals || []);
            //console.log(response.data.meals);
            seterror(false);
            setsearchText('')
        } catch (error) {
            console.error(error);
            seterror(true);
        } finally {
            setloading(false);
        }
    }




    useEffect(function () {
        getCategory();

        getCategoryItems();
    }, [])

    
    const [favourites, setFavourites] = useState(() => {

        const saved = localStorage.getItem("favourites");
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    function addToFavourites(meal) {
        setFavourites((prev) => {

            if (prev.find((item) => item.idMeal === meal.idMeal)) return prev;
            return [...prev, meal];
        });
    }

    function removeFromFavourites(idMeal) {
        setFavourites((prev) => prev.filter((item) => item.idMeal !== idMeal));
    }

    let ApiValue = {
        category,
        categoryItems,
        categoryname,
        setcategoryname,
        getCategoryItems,
        searchResults,
        getSearch,
        setsearchText,
        loading,
        error,
        favourites,
        addToFavourites,
        removeFromFavourites
    };


    return <ApiContext.Provider value={ApiValue}>
        {children}
    </ApiContext.Provider>
}