
export const SearchDetail = ({recipe}) => {
    return (
        <div style={{display:'flex'}}>
            <div style={{textAlign:'left'}}>
                <div><strong>Name:</strong></div>
                <div><strong>Calories:</strong></div>
                <div><strong>Carbohydrates_total_g:</strong></div>
                <div><strong>Cholesterol_mg:</strong></div>
                <div><strong>Fat_total_g:</strong></div>
                <div><strong>fat_saturated_g:</strong></div>
                <div><strong>fiber_g:</strong></div>
                <div><strong>potassium_mg:</strong></div>
                <div><strong>protein_g:</strong></div>
                <div><strong>serving_size_g:</strong></div>
                <div><strong>sodium_mg:</strong></div>
                <div><strong>sugar_g:</strong></div>
                <hr />    
            </div>
            <div>
                <div>{recipe.name}</div>
                <div>{recipe.calories}</div>
                <div>{recipe.carbohydrates_total_g}</div>
                <div>{recipe.cholesterol_mg}</div>
                <div>{recipe.fat_total_g}</div>
                <div>{recipe.fat_saturated_g}</div>
                <div>{recipe.fiber_g}</div>
                <div>{recipe.potassium_mg}</div>
                <div>{recipe.protein_g}</div>
                <div>{recipe.serving_size_g}</div>
                <div>{recipe.sodium_mg}</div>
                <div>{recipe.sugar_g}</div>
                <hr />
            </div>
        </div>
       
    )


}