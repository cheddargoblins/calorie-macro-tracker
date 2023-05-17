
export const SearchDetail = ({mealData}) => {
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
                <div>{mealData.name}</div>
                <div>{mealData.calories}</div>
                <div>{mealData.carbohydrates_total_g}</div>
                <div>{mealData.cholesterol_mg}</div>
                <div>{mealData.fat_total_g}</div>
                <div>{mealData.fat_saturated_g}</div>
                <div>{mealData.fiber_g}</div>
                <div>{mealData.potassium_mg}</div>
                <div>{mealData.protein_g}</div>
                <div>{mealData.serving_size_g}</div>
                <div>{mealData.sodium_mg}</div>
                <div>{mealData.sugar_g}</div>
                <hr />
            </div>
        </div>
       
    )


}