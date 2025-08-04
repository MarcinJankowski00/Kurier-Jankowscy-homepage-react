import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [stops, setStops] = useState([]);
  const [reliefs, setReliefs] = useState([]);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const sortById = (array) => {
    return [...array].sort((a, b) => a.id - b.id);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [stopsRes, reliefsRes, pricesRes] = await Promise.all([
          axios.get("http://localhost:5000/api/data/stops"),
          axios.get("http://localhost:5000/api/data/reliefs"),
          axios.get("http://localhost:5000/api/data/prices"),
        ]);

        setStops(sortById(stopsRes.data));
        setReliefs(reliefsRes.data);
        setPrices(pricesRes.data);
      } catch (err) {
        console.error("❌ Błąd ładowania danych:", err);
      } finally {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
        return () => {
          clearTimeout(timer);
        };

      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <DataContext.Provider value={{ stops, reliefs, prices, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
