import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <!-- Services Section -->
    <div className="container mt-5">
        <div className="row">
          {/* <!-- Service 1 --> */}
          <div className="col-md-4">
            <div className="card">
              {/* Corrected <img> tag */}
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="card-title">Service 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <!-- Read More Button --> */}
                <a href="#" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#service1Modal">Read More</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
