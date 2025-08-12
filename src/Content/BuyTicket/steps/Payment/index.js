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

const PAYMENT_METHODS = [
    { id: "card", label: "Karta płatnicza" },
    { id: "blik", label: "BLIK" },
    { id: "p24", label: "Przelewy24" },
];

const Payment = () => {
    const { ticketData } = useTicketPurchase(); // <- poprawka: wywołanie hooka
    const [selectedMethod, setSelectedMethod] = useState(PAYMENT_METHODS[0].id);
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
                    method: selectedMethod,
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
            <Title>Wybierz metodę płatności</Title>

            <MethodsList>
                {PAYMENT_METHODS.map((method) => (
                    <MethodItem
                        key={method.id}
                        selected={selectedMethod === method.id}
                        onClick={() => setSelectedMethod(method.id)}
                    >
                        {method.label}
                    </MethodItem>
                ))}
            </MethodsList>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <PayButton onClick={handlePay} disabled={loading}>
                {loading
                    ? "Przekierowywanie..."
                    : `Zapłać ${ticketData?.finalPrice || ""} zł`}
            </PayButton>
        </Container>
    );
};

export default Payment;

