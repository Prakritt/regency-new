import { createContext, useContext, useEffect, useState } from "react";

const TourContext = createContext();

const TourProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    import("/public/data.js")
      .then((module) => {
        if (isMounted) setData(module.default);
      })
      .catch((loadError) => {
        if (isMounted) setError(loadError);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <TourContext.Provider value={{ data, error, isLoading }}>
      {children}
    </TourContext.Provider>
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
