import React, { useState } from "react";
import TestingPage from "./Components/TestingPage";

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
      // case "home":
      //   return <Home openRecipePopup={openRecipePopup} />;
      case "preferences":
        return <TestingPage />;
      // case "recipes":
      //   return <Recipes />;
      // case "contact":
      //   return <Contact />;
      default:
        return <Home openRecipePopup={openRecipePopup} />;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h3>Colgate University</h3>
        <div>
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("recipes")}>Recipes</button>
          <button onClick={() => setCurrentPage("contact")}>Contact</button>
        </div>
      </nav>

      <header className="header">
        <h1>COLGATE EATS</h1>
        <p>Your Taste, Our Tech: Discover Recipes Tailored Just for You!</p>
        <button className="preferences-btn" onClick={() => setCurrentPage("preferences")}>
          Preferences
        </button>
      </header>

      {renderPage()}

      {showRecipePopup && (
        <div className="recipe-popup">
          <div className="popup-content">
            <h2>Recipe Details</h2>
            <p>This is a placeholder for the recipe details.</p>
            <button className="close-popup-btn" onClick={closeRecipePopup}>
              Close
            </button>
            <button className="next-btn">Find Directions</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Home({ openRecipePopup }) {
  return (
    <>
      <section className="favorites-section">
        <h2>Colgate's Top 13 Picks</h2>
        <button className="view-all-btn">View all</button>
        <div className="favorites">
          <div className="favorite-card" onClick={openRecipePopup}>
            <div className="card-title">Recipe Title</div>
            <div className="card-badges">Badge Area</div>
          </div>
          <div className="favorite-card" onClick={openRecipePopup}>
            <div className="card-title">Recipe Title</div>
            <div className="card-badges">Badge Area</div>
          </div>
          <div className="favorite-card" onClick={openRecipePopup}>
            <div className="card-title">Recipe Title</div>
            <div className="card-badges">Badge Area</div>
          </div>
        </div>
      </section>

      <section className="halal-section">
        <h2>Halal Cuisine</h2>
        <button className="view-all-btn">View all</button>
        <div className="halal-options">
          <div className="halal-card" onClick={openRecipePopup}>
            <div className="card-title">Recipe Title</div>
            <div className="card-badges">Badge Area</div>
          </div>
          <div className="halal-card" onClick={openRecipePopup}>
            <div className="card-title">Recipe Title</div>
            <div className="card-badges">Badge Area</div>
          </div>
          <div className="halal-card" onClick={openRecipePopup}>
            <div className="card-title">Recipe Title</div>
            <div className="card-badges">Badge Area</div>
          </div>
        </div>
        <div className>
        </div>
      </section>
    </>
  )
}

export default App