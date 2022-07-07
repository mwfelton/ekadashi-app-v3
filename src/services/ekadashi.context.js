import React, { useState, createContext, useEffect, useMemo } from "react";

export const EkadashiContext = createContext();

export const EkadashiContextProvider = ({ children }) => {
    const [ekadashiDate, setEkadashiDate] = useState();
    const [isLoading, setIsLoading] = useState(false)

    const retreiveDateData = () => {
        setIsLoading(true)
    }

    useEffect(() => {
        setIsLoading(true)
        retreiveDateData()
    }, [])
  return (
    <EkadashiContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5, 6, 7, 8],
      }}
    >
      {children}
    </EkadashiContext.Provider>
  );
};