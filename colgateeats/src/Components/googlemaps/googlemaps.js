import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Replace this with your actual API key
const GOOGLE_MAPS_API_KEY = "AIzaSyAjEhlgnQbhLM1LYlZ9dN-N0egcCGJp7EM";

// Map container styling
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// Center the map on a specific location (e.g., Colgate University)
const center = {
  lat: 42.8187, // Latitude for Colgate University
  lng: -75.5378, // Longitude for Colgate University
};

const GoogleMaps = () => {
  return (
    <div>
      <h2>Our Location</h2>
      <LoadScript googleMapsApiKey="AIzaSyAWv8WlIvbekJ38sqn3F2ndXk50aFyiVAY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          {/* Marker for the location */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMaps;
