import React, { useState } from "react";
import Home from "./Components/home";
import TestingPage from "./Components/TestingPage";
import FoodSuggestions from "./Components/FoodSuggestions";
import GoogleMaps from "./Components/googlemaps/googlemaps";
import Navbar from "./Components/navbar";
import Header from "./Components/header";
import RecipePopup from "./Components/RecipePopup";
import { predictRoute } from "./Helperfunctions/IngredientRoutePredictor";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showRecipePopup, setShowRecipePopup] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [predictedRoute, setPredictedRoute] = useState(""); // Store the predicted route
  const [recipes, setRecipes] = useState([]); // Store the recipes

  // Open the RecipePopup with a specific recipe
  const openRecipePopup = (recipe) => {
    setSelectedRecipe(recipe); // Set selected recipe data
    setShowRecipePopup(true); // Show the recipe popup
  };

  // Close the RecipePopup
  const closeRecipePopup = () => {
    setShowRecipePopup(false); // Close the recipe popup
  };

  // Function to navigate to FoodSuggestions page with data
  const navigateToFoodSuggestions = async (route, recipeData) => {
    // Ensure the popup closes first
    setShowRecipePopup(false);
    // Set the predicted route and recipes
    console.log("recipeData",recipeData[0])
    route = await predictRoute(recipeData[0].ingredients);
    console.log("route",route)
    setPredictedRoute(route);
    setRecipes(recipeData);
    // Navigate to the FoodSuggestions page
    setCurrentPage("foodSuggestions");
  };

  // Function to render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case "preferences":
        return <TestingPage navigateToFoodSuggestions={navigateToFoodSuggestions} />; // Pass the navigation function to TestingPage
      case "foodSuggestions":
        return <FoodSuggestions route={predictedRoute} recipe={recipes[0]} />; // Pass the first recipe and the route
      case "contact":
        return <GoogleMaps />;
      default:
        return <Home openRecipePopup={openRecipePopup} />;
    }
  };

  return (
    <div className="app">
      <Navbar setCurrentPage={setCurrentPage} />
      <Header setCurrentPage={setCurrentPage} />

      {/* Render the appropriate page */}
      {renderPage()}

      {/* Show the RecipePopup if it is open */}
      <div className="restbod">
        {showRecipePopup && selectedRecipe && (
          <RecipePopup
            title={selectedRecipe.title}
            description={selectedRecipe.description}
            ingredients={selectedRecipe.ingredients}
            instructions={selectedRecipe.instructions}
            closeRecipePopup={closeRecipePopup}
            onFindDirections={() => navigateToFoodSuggestions(predictedRoute, [selectedRecipe])} // Navigate to FoodSuggestions on button click
          />
        )}
      </div>
    </div>
  );
}

export default App;
