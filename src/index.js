import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assests/images/Rectangle 1.png";
import DestinationProvider from "./contexts/DestinationProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DestinationProvider>
      <div className="bg-scroll backgroung-image-cover ">
        <App />
      </div>
    </DestinationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
