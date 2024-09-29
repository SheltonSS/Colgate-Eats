import React, { useState } from "react";
import Home from "./Components/home";
import TestingPage from "./Components/TestingPage";
import FoodSuggestions from "./Components/FoodSuggestions"; // Import FoodSuggestions component
import GoogleMaps from "./Components/googlemaps/googlemaps";
import Navbar from "./Components/navbar";
import Header from "./Components/header";
import RecipePopup from "./Components/RecipePopup";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showRecipePopup, setShowRecipePopup] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [predictedRoute, setPredictedRoute] = useState(''); // Add state for predicted route
  const [recipes, setRecipes] = useState([]); // Add state for recipes

  const openRecipePopup = (recipe) => {
    setSelectedRecipe(recipe); // Set the selected recipe data
    setShowRecipePopup(true);
  };

  const closeRecipePopup = () => {
    setShowRecipePopup(false);
  };

  // Function to navigate to FoodSuggestions page with data
  const navigateToFoodSuggestions = (route, recipesData) => {
    setPredictedRoute(route);
    setRecipes(recipesData);
    setCurrentPage("foodSuggestions");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "preferences":
        return <TestingPage navigateToFoodSuggestions={navigateToFoodSuggestions} />; // Pass function to TestingPage
      case "foodSuggestions":
        return <FoodSuggestions route={predictedRoute} recipes={recipes} />; // Render FoodSuggestions with data
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

      {renderPage()}
      <div className="restbod">
        {showRecipePopup && selectedRecipe && (
          <RecipePopup
            title={selectedRecipe.title}
            description={selectedRecipe.description}
            ingredients={selectedRecipe.ingredients}
            instructions={selectedRecipe.instructions}
            closeRecipePopup={closeRecipePopup}
          />
        )}
      </div>
    </div>
  );
}

export default App;
