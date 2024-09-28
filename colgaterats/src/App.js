import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <!-- Services Section -->
 <div class="container mt-5">
    <div class="row">
      <!-- Service 1 -->
      <div class="col-md-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Service 1">
          <div class="card-body">
            <h5 class="card-title">Service 1</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <!-- Read More Button -->
            <a href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#service1Modal">Read More</a>
          </div>
        </div>
      </div>

      <!-- Service 2 -->
      <div class="col-md-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Service 2">
          <div class="card-body">
            <h5 class="card-title">Service 2</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <!-- Read More Button -->
            <a href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#service2Modal">Read More</a>
          </div>
        </div>
      </div>

      <!-- Service 3 -->
      <div class="col-md-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Service 3">
          <div class="card-body">
            <h5 class="card-title">Service 3</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <!-- Read More Button -->
            <a href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#service3Modal">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modals Section -->

  <!-- Service 1 Modal -->
  <div class="modal fade" id="service1Modal" tabindex="-1" aria-labelledby="service1ModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="service1ModalLabel">Service 1 Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          More information about Service 1 can go here. You can add detailed descriptions, images, or other content.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-danger">Ride Services</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Service 2 Modal -->
  <div class="modal fade" id="service2Modal" tabindex="-1" aria-labelledby="service2ModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="service2ModalLabel">Service 2 Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          More information about Service 2 can go here. You can add detailed descriptions, images, or other content.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-danger">Ride Services</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Service 3 Modal -->
  <div class="modal fade" id="service3Modal" tabindex="-1" aria-labelledby="service3ModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="service3ModalLabel">Service 3 Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          More information about Service 3 can go here. You can add detailed descriptions, images, or other content.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-danger">Ride Services</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
