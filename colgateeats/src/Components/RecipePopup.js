import React from "react";
// import {handleGenerateRecipes} from TestingPage
// import TestingPage from "./TestingPage";

// const handleGenerateRecipes = async () => {
//     setLoading(true);
//     const timeRange = [30, 60]; // Set your desired time range
//     try {
//       const generatedRecipes = await generateRecipe(sweet, mild, veggie, mealTime, timeRange, cuisine, skillLevel);

//       // Predict route based on the first recipe's ingredients
//       const route = await predictRoute(generatedRecipes.ingredients);

//       // Navigate to FoodSuggestions with the predicted route and recipes
//       console.log('Generated Recipes:', generatedRecipes); // Check the output
//       navigateToFoodSuggestions([generatedRecipes, route],route);

//     } catch (error) {
//       console.error("Error generating recipes:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

function RecipePopup({
    title = "No Title",
    description = "No description available.",
    ingredients = [],
    instructions = [],
    closeRecipePopup,
}) {
    return (
        <div className="recipe-popup">
            <div className="popup-content">
                <h2>{title}</h2>
                <p>{description}</p>

                <h3>Ingredients</h3>
                <ul>
                    {ingredients.length > 0 ? (
                        ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                    ) : (
                        <li>No ingredients provided.</li>
                    )}
                </ul>

                <h3>Instructions</h3>
                <ol>
                    {instructions.length > 0 ? (
                        instructions.map((instruction, index) => <li key={index}>{instruction}</li>)
                    ) : (
                        <li>No instructions provided.</li>
                    )}
                </ol>

                <button className="close-popup-btn" onClick={closeRecipePopup}>
                    Close
                </button>
                <button className="next-btn">Find Directions</button>
            </div>
        </div>
    );
}

export default RecipePopup;
