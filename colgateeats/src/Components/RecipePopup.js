import React from "react";

function RecipePopup({ title, description, ingredients, instructions, closeRecipePopup }) {
  return (
    <div className="recipe-popup">
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{description}</p>

        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3>Instructions</h3>
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
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
