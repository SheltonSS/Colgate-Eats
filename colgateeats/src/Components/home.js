import React from "react";

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
      </section>
    </>
  );
}

export default Home;
