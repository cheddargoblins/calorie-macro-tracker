import { useState, useEffect } from "react"
import axios from 'axios'
import { SearchDetail } from "../components/SearchDetail"

export const RecordMeal = () => {
    const [query, setQuery] = useState('')
    const [recipes, setRecipes] = useState('')
    console.log(recipes)
    
    
    const apiKey = 'QfOgfb2UXqHnhK2kqf675A==pG45bjuMZVggvC9P'

    const handleSearch = async () => {
        const response = await axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${query}`
    , {
        headers: {
            'X-Api-Key': apiKey
            }})
    console.log(response)
    setRecipes(response.data)
}
   
    return (
        <div>
            <header>Search For a Recipe Below</header>

            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search..." value={query} onChange={e=> [e.preventDefault(), setQuery(e.target.value)]} />
                <input type="submit" value='Search' />
            </form>
            {
                recipes && recipes.map((recipe, index) => (
                    <SearchDetail 
                        key={index}
                        recipe={recipe}
                    />  
                )
                )}
        </div>
    )
}