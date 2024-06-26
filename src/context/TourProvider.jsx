import { createContext, useContext } from "react";
import data from "/public/data.js";

const TourContext = createContext();

const TourProvider = ({ children }) => {
  return (
    <TourContext.Provider value={{ data }}>{children}</TourContext.Provider>
  );
};

const useTour = () => {
  const context = useContext(TourContext);
  if (context === undefined) {
    console.log("useUser must be used within a TourProvider");
  }
  return context;
};

export { TourProvider, useTour };
