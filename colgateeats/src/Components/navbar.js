// Components/Navbar.js
import React from "react";

function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <h3>Colgate University</h3>
      <div>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("recipes")}>Recipes</button>
        <button onClick={() => setCurrentPage("contact")}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
