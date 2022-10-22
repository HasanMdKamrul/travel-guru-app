import React, { createContext, useEffect, useState } from "react";

export const DestinationContext = createContext();

const DestinationProvider = ({ children }) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const dataLoader = async () => {
      try {
        const response = await fetch(
          `https://travel-guru-server-one.vercel.app/destinations`
        );
        response.ok ? console.log("Successfull") : console.log("failed");
        const data = await response.json();
        console.log(data);
        setDestinations(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    dataLoader();
  }, []);

  const destinationInfo = { destinations };

  return (
    <DestinationContext.Provider value={destinationInfo}>
      {children}
    </DestinationContext.Provider>
  );
};

export default DestinationProvider;
