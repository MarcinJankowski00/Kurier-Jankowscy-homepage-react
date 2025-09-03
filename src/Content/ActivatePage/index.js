import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ActivatePage = () => {
  const [message, setMessage] = useState("⏳ Aktywacja...");
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");
  const email = query.get("email");

  useEffect(() => {
    const activate = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/activate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, token }),
        });
        const data = await res.json();
        setMessage(data.message || data.error);
      } catch (err) {
        setMessage("❌ Błąd aktywacji");
      }
    };
    activate();
  }, [email, token]);

  return <h2>{message}</h2>;
};

export default ActivatePage;
