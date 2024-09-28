import React from 'react';
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Colgate University</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container-fluid bg-gradient p-5 text-white text-center d-flex align-items-center justify-content-center" style={{height: "50vh", backgroundImage: 'url(https://via.placeholder.com/1920x1080)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
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

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 2" />
              <div className="card-body">
                <h5 className="card-title">Food Delivery Services</h5>
                <p className="card-text">Get your favorite multicultural foods delivered straight to you.</p>
                <a href="#" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#service2Modal">Read More</a>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 3" />
              <div className="card-body">
                <h5 className="card-title">Cultural Cooking Classes</h5>
                <p className="card-text">Join hands-on cooking sessions to learn how to cook cultural dishes.</p>
                <a href="#" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#service3Modal">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {/* Service 1 Modal */}
      <div className="modal fade" id="service1Modal" tabIndex="-1" aria-labelledby="service1ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="service1ModalLabel">Multicultural Recipe Database</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Explore our wide variety of multicultural recipes, from street food to traditional dishes.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger">Start Exploring</button>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 Modal */}
      <div className="modal fade" id="service2Modal" tabIndex="-1" aria-labelledby="service2ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="service2ModalLabel">Food Delivery Services</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Get access to food delivery options for different cuisines.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger">Order Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 Modal */}
      <div className="modal fade" id="service3Modal" tabIndex="-1" aria-labelledby="service3ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="service3ModalLabel">Cultural Cooking Classes</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Join our virtual or in-person cooking classes hosted by expert chefs.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger">Join a Class</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2024 Colgate University | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
