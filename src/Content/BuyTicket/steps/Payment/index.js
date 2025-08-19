import { useState } from "react";
import {
    Container,
    Title,
    MethodsList,
    MethodItem,
    PayButton,
    ErrorMessage,
} from "./styled";
import { useTicketPurchase } from "../../../../context/TicketPurchaseContext";

const Payment = () => {
    const { ticketData } = useTicketPurchase(); // <- poprawka: wywołanie hooka
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handlePay = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token"); // zakładam że tak zapisujesz po logowaniu

            const res = await fetch("http://localhost:5000/api/payment/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, // <-- to jest ważne
                },
                body: JSON.stringify({
                    ticketData,
                }),
            });

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.error || "Błąd serwera");
            }

            const data = await res.json();

            if (data?.url) {
                window.location.href = data.url; // przekierowanie do Stripe
            } else {
                throw new Error("Brak adresu płatności w odpowiedzi serwera.");
            }
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <Container>
            <PayButton onClick={handlePay} disabled={loading}>
                {loading
                    ? "Przekierowywanie..."
                    : `Zapłać ${ticketData?.finalPrice || ""} zł`}
            </PayButton>
        </Container>
    );
};

export default Payment;

