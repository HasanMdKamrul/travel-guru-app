import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "500px",
  height: "702px",
};

const center = {
  lat: 23.8103,
  lng: 90.4125,
};

// ** https://react-google-maps-api-docs.netlify.app/

const MapCpmponent = () => {
  return (
    <LoadScript googleMapsApiKey="">
      <div>
        <h1 className="text-3xl font-extrabold text-center">
          See Our Location
        </h1>

        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MapCpmponent;
