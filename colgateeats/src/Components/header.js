// Components/Header.js
import React from "react";

function Header({ setCurrentPage }) {
  return (
    <header className="header">
      <h1>COLGATE EATS</h1>
      <p>Your Taste, Our Tech: Discover Recipes Tailored Just for You!</p>
      <button
        className="preferences-btn"
        onClick={() => setCurrentPage("preferences")}
      >
        Preferences
      </button>
    </header>
  );
}

export default Header;
