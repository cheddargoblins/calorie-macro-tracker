import { useState, useContext } from "react"
import axios from 'axios'
import { SearchDetail } from "../components/SearchDetail"
import { MealItem } from "../components/MealItem";
import { queryContext } from "../App";

export const RecordMeal = () => {
    const [query, setQuery] = useContext(queryContext)
    const [mealData, setMealData] = useState('')
    const [mealItems, setMealItems] = useState([{ id: 1 }]);

    const handleSearch = async () => {
        const response = await axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
        headers: {
            'X-Api-Key': 'QfOgfb2UXqHnhK2kqf675A==pG45bjuMZVggvC9P'
            }
    })
    console.log(response.data)
    setMealData(response.data)
    }

    const addMealItem = () => {
        const newId = mealItems.length + 1;
        setMealItems([...mealItems, { id: newId }]);
    };

   
    return (
        <div>
            <header>Log Your Meals Below!</header>
            {mealItems.map((mealItem) => (
                <MealItem key={mealItem.id} />
            ))}
            <button onClick={addMealItem}>Add Meal Item</button>
        </div>
    )
}

// {mealData && mealData.map((mealData, index) => (
//     <SearchDetail 
//         key={index}
//         mealData={mealData}
//     />  
// ))}