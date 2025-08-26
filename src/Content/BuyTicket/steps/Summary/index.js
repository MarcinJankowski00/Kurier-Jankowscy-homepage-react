import { useState } from "react";
import { useTicketPurchase } from "../../../../context/TicketPurchaseContext";
import {
    SummaryWrapper,
    SummaryTitle,
    SummaryRow,
    Label,
    Value,
    PriceBox,
    PayButton
} from "./styled";

const Summary = () => {
    const { ticketData } = useTicketPurchase();
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
    const renderInvoiceSection = () => {
        if (ticketData.invoiceType === "company") {
            return (
                <>
                    <SummaryRow>
                        <Label>Nazwa firmy:</Label>
                        <Value>{ticketData.companyName}</Value>
                    </SummaryRow>
                    <SummaryRow>
                        <Label>NIP:</Label>
                        <Value>{ticketData.nip}</Value>
                    </SummaryRow>
                    <SummaryRow>
                        <Label>Adres:</Label>
                        <Value>{ticketData.companyStreet} {ticketData.companyHouseNumber}, {ticketData.companyPostalCode} {ticketData.companyCity}</Value>
                    </SummaryRow>
                    <SummaryRow>
                        <Label>Email do faktury:</Label>
                        <Value>{ticketData.companyEmail}</Value>
                    </SummaryRow>
                </>
            );
        }

        if (ticketData.invoiceType === "private") {
            return (
                <>
                    <SummaryRow>
                        <Label>Imię i nazwisko:</Label>
                        <Value>{ticketData.invoiceName} {ticketData.invoiceSurname}</Value>
                    </SummaryRow>
                    <SummaryRow>
                        <Label>Adres:</Label>
                        <Value>{ticketData.street} {ticketData.houseNumber}, {ticketData.zipCode} {ticketData.city}</Value>
                    </SummaryRow>
                    <SummaryRow>
                        <Label>Email do faktury:</Label>
                        <Value>{ticketData.invoiceEmail}</Value>
                    </SummaryRow>
                </>
            );
        }

        return null;
    };
    return (
        <SummaryWrapper>
            <SummaryRow>
                <Label>Trasa:</Label>
                <Value>{ticketData.startStop?.name} → {ticketData.endStop?.name}</Value>
            </SummaryRow>
            <SummaryRow>
                <Label>Rodzaj biletu:</Label>
                <Value>{ticketData.type === "monthly" ? "Miesięczny" : "Miesięczny tam i z powrotem"}</Value>
            </SummaryRow>
            <SummaryRow>
                <Label>Kierunek:</Label>
                <Value>{ticketData.direction === "one-way" ? "W jedną stronę" : "W obie strony"}</Value>
            </SummaryRow>
            <SummaryRow>
                <Label>Okres ważności:</Label>
                <Value>{ticketData.month}/{ticketData.year}</Value>
            </SummaryRow>
            <SummaryRow>
                <Label>Ulga:</Label>
                <Value>{ticketData.relief?.name || "Brak"}</Value>
            </SummaryRow>
            <SummaryRow>
                <Label>Pasażer:</Label>
                <Value>{ticketData.name} {ticketData.surname}</Value>
            </SummaryRow>
            <SummaryRow>
                <Label>Email kontaktowy:</Label>
                <Value>{ticketData.email}</Value>
            </SummaryRow>
            <SummaryRow>
                <Label>Telefon:</Label>
                <Value>{ticketData.contactNumber}</Value>
            </SummaryRow>

            {ticketData.invoiceType !== "none" && (
                <>
                    <SummaryTitle>Dane do faktury</SummaryTitle>
                    {renderInvoiceSection()}
                </>
            )}

            <PriceBox>
                <div>Cena bazowa: {ticketData.basePrice} zł</div>
                <div>Zniżka: {ticketData.discount * 100}%</div>
                <div><strong>Do zapłaty: {ticketData.finalPrice} zł</strong></div>
            </PriceBox>
            <PayButton onClick={handlePay} disabled={loading}>
                {loading
                    ? "Przekierowywanie..."
                    : `Zapłać ${ticketData?.finalPrice || ""} zł`}
            </PayButton>
        </SummaryWrapper>
    );
};

export default Summary;
