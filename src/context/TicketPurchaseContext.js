import { createContext, useContext, useState } from "react";

const TicketPurchaseContext = createContext();

export const TicketPurchaseProvider = ({ children }) => {
  const [ticketData, setTicketData] = useState({
    startStop: null,
    endStop: null,
    type: "monthly",
    relief: null,
    passenger: null,
    price: null,
    month: null,
    year: null,
    // dodaj inne potrzebne pola
  });

  const updateTicketData = (partialData) => {
    setTicketData((prev) => ({ ...prev, ...partialData }));
  };

  const resetTicketData = () => {
    setTicketData({});
  };

  return (
    <TicketPurchaseContext.Provider value={{ ticketData, updateTicketData, resetTicketData }}>
      {children}
    </TicketPurchaseContext.Provider>
  );
};

export const useTicketPurchase = () => useContext(TicketPurchaseContext);
