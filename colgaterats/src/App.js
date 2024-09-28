import React from 'react';
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

      {/* Colgate Food Finder Section */}
      <div className="container-fluid bg-danger text-white text-center p-5">
        <h1>Colgate Food Finder</h1>
        <p className="lead">Allowing Colgate students access to multicultural food and recipes</p>
        <a href="#" className="btn btn-light btn-lg">Learn More</a>
      </div>

      {/* Services Section */}
      <div className="container mt-5">
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="card-title">Service 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#service1Modal">Read More</a>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 2" />
              <div className="card-body">
                <h5 className="card-title">Service 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#service2Modal">Read More</a>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 3" />
              <div className="card-body">
                <h5 className="card-title">Service 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
              <h5 className="modal-title" id="service1ModalLabel">Service 1 Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              More information about Service 1 can go here. You can add detailed descriptions, images, or other content.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger">Ride Services</button>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 Modal */}
      <div className="modal fade" id="service2Modal" tabIndex="-1" aria-labelledby="service2ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="service2ModalLabel">Service 2 Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              More information about Service 2 can go here. You can add detailed descriptions, images, or other content.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger">Ride Services</button>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 Modal */}
      <div className="modal fade" id="service3Modal" tabIndex="-1" aria-labelledby="service3ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="service3ModalLabel">Service 3 Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              More information about Service 3 can go here. You can add detailed descriptions, images, or other content.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger">Ride Services</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light text-center p-3 mt-5">
        <p>&copy; 2024 Colgate University All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
