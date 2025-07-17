import { useAuth } from "../../context/AuthContext";
import {
  Container,
  TicketList,
  TicketCard,
  TicketField,
  NoTickets,
} from "./styled";

const MyTickets = () => {
  const { userTicketsData } = useAuth();

  const formatMonthYear = (month, year) => {
    const date = new Date(year, month - 1);
    return date.toLocaleString("pl-PL", { month: "long", year: "numeric" });
  };


  if (!userTicketsData || userTicketsData.tickets.length === 0) {
    return (
      <Container>
        <NoTickets>Brak zakupionych biletów.</NoTickets>
      </Container>
    );
  }

  return (
    <Container>
      <TicketList>
        {userTicketsData.tickets.map((ticket, index) => (
          <TicketCard key={index}>
            <TicketField>
              <strong>Trasa:</strong> {ticket.startStop} → {ticket.endStop}
            </TicketField>
            <TicketField>
              <strong>Typ:</strong> Miesięczny
            </TicketField>
            <TicketField>
              <strong>Kierunek:</strong> {ticket.type === "monthly" ? "TAM" : "TAM/POWRÓT"}
            </TicketField>
            <TicketField>
              <strong>Ulga:</strong> {ticket.relief.value * 100}%
            </TicketField>
            <TicketField>
              <strong>Cena:</strong> {ticket.price} zł
            </TicketField>
            <TicketField>
              <strong>Data zakupu:</strong> {new Date(ticket.purchaseDate).toLocaleString("pl-PL")}
            </TicketField>
            <TicketField>
              <strong>Ważny:</strong> {formatMonthYear(ticket.month, ticket.year)}
            </TicketField>
          </TicketCard>
        ))}
      </TicketList>
    </Container>
  );
};

export default MyTickets;