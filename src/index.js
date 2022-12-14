import React from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./assests/images/Rectangle 1.png";
import AuthProvider from "./contexts/AuthProvider";
import DestinationProvider from "./contexts/DestinationProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // backgroung-image-cover
  // className="bg-cover backgroung-image-cover min-h-screen  "
  <React.StrictMode>
    <DestinationProvider>
      <div className="bg-cover backgroung-image-cover min-h-screen  ">
        <AuthProvider>
          <App />
          <ToastContainer />
        </AuthProvider>
      </div>
    </DestinationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
