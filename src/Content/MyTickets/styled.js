import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const TicketList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TicketCard = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  padding: 1.2rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

export const TicketField = styled.p`
  margin: 0.3rem 0;
`;

export const NoTickets = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #777;
`;