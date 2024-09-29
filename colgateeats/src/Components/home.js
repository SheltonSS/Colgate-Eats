import React from "react";
import recipes from "./recipes";

function Home({ openRecipePopup }) {
    return (
        <>
            <section className="favorites-section">
                <h2>Colgate's Top 13 Picks</h2>
                <button className="view-all-btn">View all</button>
                <div className="favorites">
                    <div className="favorite-card" onClick={() => openRecipePopup(recipes["Fuzhou Triangle Cake"])}>
                        <div className="card-title">Fuzhou Triangle Cake</div>
                        <div className="card-badges">Badge Area</div>
                    </div>
                    <div className="favorite-card" onClick={() => openRecipePopup(recipes["Kare-Kare"])}>
                        <div className="card-title">Kare-Kare</div>
                        <div className="card-badges">Badge Area</div>
                    </div>
                </div>
            </section>

            <section className="halal-section">
                <h2>Halal Cuisine</h2>
                <button className="view-all-btn">View all</button>
                <div className="halal-options">
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Shawarma"])}>
                        <div className="card-title">Shawarma</div>
                        <div className="card-badges">Badge Area</div>
                    </div>
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Falafel"])}>
                        <div className="card-title">Falafel</div>
                        <div className="card-badges">Badge Area</div>
                    </div>
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Moroccan Couscous"])}>
                        <div className="card-title">Moroccan Couscous</div>
                        <div className="card-badges">Badge Area</div>
                    </div>
                </div>
            </section>

            <section className="halal-section">
                <h2>Others</h2>
                <button className="view-all-btn">View all</button>
                <div className="halal-options">
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Fried Chicken"])}>
                        <div className="card-title">Fried Chicken</div>
                        <div className="card-badges">Badge Area</div>
                    </div>
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Paneer Bhurji"])}>
                        <div className="card-title">Paneer Bhurji</div>
                        <div className="card-badges">Badge Area</div>
                    </div>
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Ponzu Tofu Poke Bowl"])}>
                        <div className="card-title">Ponzu Tofu Poke Bowl</div>
                        <div className="card-badges">Badge Area</div>
                    </div>
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Haitian Tasso"])}>
                        <div className="card-title">Haitian Tasso</div>
                        <div className="card-badges">Badge Area</div>
                    </div>
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Beef Bourguignon"])}>
                        <div className="card-title">Beef Bourguignon</div>
                        <div className="card-badges">Badge Area</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
