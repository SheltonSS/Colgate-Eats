// Components/RecipePopup.js
import React from "react";

function RecipePopup({ closeRecipePopup }) {
  return (
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
  );
}

export default RecipePopup;
