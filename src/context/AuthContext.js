import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [userEmail, setUserEmail] = useState(localStorage.getItem("email") || "");
  const [userData, setUserData] = useState(null);

  const login = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setIsLoggedIn(true);
    setUserEmail(email);
    fetchUserData(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setUserEmail("");
    setUserData(null);
  };

  const fetchUserData = async (token) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setUserData(data.user);
      }
    } catch (err) {
      console.error("Błąd pobierania danych użytkownika:", err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userEmail, userData, login, logout, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
