import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "500px",
  height: "702px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

// ** https://react-google-maps-api-docs.netlify.app/

const MapCpmponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCUWA-HhaIeT2bQrPcEGyZnyh-vlM02Sak">
      <div>
        <h1 className="text-3xl font-extrabold text-center">
          See Your Location
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
