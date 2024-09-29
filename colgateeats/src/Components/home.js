import React from "react";
import recipes from "./recipes";
import FuzhouImage from "./Pictures/Fuzhou.png"; // Correct path
import KareKareImage from "./Pictures/KareKare.png"; // Correct path
import ShawarmaImage from "./Pictures/Shawarma.png"; // Correct path
import FalafelImage from "./Pictures/Falafel.png"; // Correct path
import CouscousImage from "./Pictures/Couscous.png"; // Correct path
import FriedChickenImage from "./Pictures/FriedChicken.png"; // Correct path
import PaneerBhurjiImage from "./Pictures/PaneerBhurji.png"; // Correct path
import TofuPokeBowlImage from "./Pictures/PonzuTofuPokeBowl.png"; // Correct path
import TassoImage from "./Pictures/HaitianTasso.png"; // Correct path
import BeefBourguignonImage from "./Pictures/BeefBourguignon.png"; // Correct path
import SpicyImage from "./Pictures/Spicy.png"; // Correct path
import KosherImage from "./Pictures/Kosher.png"; // Correct path
import HalalImage from "./Pictures/Halal.png"; // Correct path
import VeganImage from "./Pictures/Vegan.png"; // Correct path
import TopImage from "./Pictures/Top.png"; // Correct path
import PeanutImage from "./Pictures/Peanut.png"; // Correct path


function Home({ openRecipePopup }) {
    return (
        <>
            <section className="favorites-section">
                <h2>Colgate's Top 13 Picks</h2>
                <button className="view-all-btn">View all</button>
                <div className="favorites">
                    <div className="favorite-card" onClick={() => openRecipePopup(recipes["Fuzhou Triangle Cake"])}>
                        <div className="card-title">Fuzhou Triangle Cake</div>
                        <img className="images" src={FuzhouImage} alt= " " />
                        <div className="badges"> 
                          <img src={TopImage} alt= " " /> 
                          <img src={VeganImage} alt= " " />
                        </div> 
                    </div>
                    <div className="favorite-card" onClick={() => openRecipePopup(recipes["Kare-Kare"])}>
                        <div className="card-title">Kare-Kare</div>
                        <img className="images" src={KareKareImage} alt= " " /> 
                        <div className="badges"> 
                          <img src={TopImage} alt= " " />
                          <img src={PeanutImage} alt= " " /> 
                        </div> 
                    </div>
                </div>
            </section>

            <section className="halal-section">
                <h2>Halal Cuisine</h2>
                <button className="view-all-btn">View all</button>
                <div className="halal-options">
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Shawarma"])}>
                        <div className="card-title">Shawarma</div>
                        <img className="images" src={ShawarmaImage} alt= " " /> 
                        <div className="badges"> 
                          <img src={SpicyImage} alt= " " />
                          <img src={HalalImage} alt= " " />
                        </div>
                    </div>
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Falafel"])}>
                        <div className="card-title">Falafel</div>
                        <img className="images" src={FalafelImage} alt= " " /> 
                        <div className="badges"> 
                          <img src={VeganImage} alt= " " />
                          <img src={HalalImage} alt= " " />
                          <img src={KosherImage} alt= " " /> 
                        </div>
                    </div>
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Moroccan Couscous"])}>
                        <div className="card-title">Moroccan Couscous</div>
                        <img className="images" src={CouscousImage} alt= " " /> 
                        <div className="badges"> 
                          <img src={SpicyImage} alt= " " />
                          <img src={HalalImage} alt= " " />
                        </div>
                    </div>
                </div>
            </section>

            <section className="halal-section">
                <h2>Others</h2>
                <button className="view-all-btn">View all</button>
                <div className="halal-options">
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Fried Chicken"])}>
                        <div className="card-title">Fried Chicken</div>
                        <img className="images" src={FriedChickenImage} alt= " " /> 
                        <div className="badges"> 
                          <img src={HalalImage} alt= " " />
                          <img src={KosherImage} alt= " " /> 
                        </div>
                    </div>
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Paneer Bhurji"])}>
                        <div className="card-title">Paneer Bhurji</div>
                        <img className="images" src={PaneerBhurjiImage} alt= " " /> 
                        <div className="badges"> 
                          <img src={VeganImage} alt= " " />
                          <img src={SpicyImage} alt= " " />
                          <img src={HalalImage} alt= " " />
                          <img src={KosherImage} alt= " " /> 
                        </div>
                    </div>
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Ponzu Tofu Poke Bowl"])}>
                        <div className="card-title">Ponzu Tofu Poke Bowl</div>
                        <img className="images" src={TofuPokeBowlImage} alt= " " /> 
                        <div className="badges"> 
                          <img src={VeganImage} alt= " " />
                          <img src={HalalImage} alt= " " />
                          <img src={KosherImage} alt= " " /> 
                        </div>
                    </div>
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Haitian Tasso"])}>
                        <div className="card-title">Haitian Tasso</div>
                        <img className="images" src={TassoImage} alt= " " /> 
                        <div className="badges"> 
                          <img src={HalalImage} alt= " " />
                        </div>
                    </div>
                    <div className="halal-card" onClick={() => openRecipePopup(recipes["Beef Bourguignon"])}>
                        <div className="card-title">Beef Bourguignon</div>
                        <img className="images" src={BeefBourguignonImage} alt= " " /> 
                        <div className="badges"> 
                          <img src={HalalImage} alt= " " />
                          <img src={KosherImage} alt= " " /> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
