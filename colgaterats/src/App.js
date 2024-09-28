import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function App() {
  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Colgate University</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testing">Testing</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container-fluid bg-gradient p-5 text-white text-center d-flex align-items-center justify-content-center" style={{ height: "50vh", backgroundColor: "#800000", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div>
          <h1 className="display-4 fw-bold">Colgate Food Finder</h1>
          <p className="lead">Access to multicultural food and recipes for Colgate students</p>
          <a href="#" className="btn btn-light btn-lg mt-3 shadow">Learn More</a>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="card-title">Multicultural Recipe Database</h5>
                <p className="card-text">Access an extensive collection of recipes from around the world.</p>
                <a href="#" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#service1Modal">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2024 Colgate University | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
