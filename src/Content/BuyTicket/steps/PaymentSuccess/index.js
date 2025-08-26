import { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const [status, setStatus] = useState("loading");
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    if (!sessionId) {
      setError("Brak session_id");
      setStatus("error");
      return;
    }

    const fetchStatus = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/payment/session-status?session_id=${sessionId}`
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Błąd");

        if (data.ticket_status === "paid") {
          setStatus("paid");
          setTicket(data.ticket);
        } else {
          setStatus(data.ticket_status || "pending");
          setTimeout(fetchStatus, 3000);
        }
      } catch (e) {
        setError(e.message);
        setStatus("error");
      }
    };

    fetchStatus();
  }, []);

  if (status === "loading") return <p>⏳ Sprawdzam status płatności…</p>;

  if (status === "error")
    return <p style={{ color: "red" }}>❌ Błąd: {error}</p>;

  if (status === "paid" && ticket) {
    return (
      <div>
        <h1>✅ Płatność przyjęta</h1>
        <p>Twój bilet został aktywowany:</p>
        <ul>
          <li>
            <strong>Trasa:</strong> {ticket.startStop} → {ticket.endStop}
          </li>
          <li>
            <strong>Typ:</strong> {ticket.type}
          </li>
          <li>
            <strong>Miesiąc:</strong> {ticket.month}/{ticket.year}
          </li>
          <li>
            <strong>Cena:</strong> {ticket.finalPrice} zł
          </li>
        </ul>
      </div>
    );
  }

  return <p>⏳ Oczekiwanie na potwierdzenie płatności…</p>;
}
