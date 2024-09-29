// App.js
import React, { useState } from "react";
import Home from "./Components/home";
import TestingPage from "./Components/TestingPage";
import googlemaps from "./Components/googlemaps/googlemaps";
import Navbar from "./Components/navbar";
import Header from "./Components/header";
import RecipePopup from "./Components/RecipePopup";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showRecipePopup, setShowRecipePopup] = useState(false);

  const openRecipePopup = () => {
    setShowRecipePopup(true);
  };

  const closeRecipePopup = () => {
    setShowRecipePopup(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "preferences":
        return <TestingPage />;
      case "contact":
        return <googlemaps />;
      default:
        return <Home openRecipePopup={openRecipePopup} />;
    }
  };

  return (
    <div className="app">
      <Navbar setCurrentPage={setCurrentPage} />
      <Header setCurrentPage={setCurrentPage} />

      {renderPage()}

      {showRecipePopup && <RecipePopup closeRecipePopup={closeRecipePopup} />}
    </div>
  );
}

export default App;
