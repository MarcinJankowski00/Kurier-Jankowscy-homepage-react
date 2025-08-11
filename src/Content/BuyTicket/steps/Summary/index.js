import { useTicketPurchase } from "../../../../context/TicketPurchaseContext";
import {
    SummaryWrapper,
    SummaryTitle,
    SummaryRow,
    Label,
    Value,
    PriceBox
} from "./styled";

const Summary = () => {
    const { ticketData } = useTicketPurchase();
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
        </SummaryWrapper>
    );
};

export default Summary;
