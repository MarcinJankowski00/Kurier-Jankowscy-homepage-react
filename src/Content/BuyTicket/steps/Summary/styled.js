import styled from "styled-components";

export const SummaryWrapper = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  max-width: 600px;
  margin: 0 auto;
`;

export const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    margin-bottom: 10px;
    font-size: 1.3rem;
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    padding: 3px 0;
    flex-direction: column;
    margin-bottom: 5px;
  }
`;

export const Label = styled.span`
  font-weight: 500;
  color: #555;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    margin-bottom: 5px;
  }
`;

export const Value = styled.span`
  font-weight: 400;
  color: #222;
`;

export const PriceBox = styled.div`
  margin-top: 20px;
  padding: 16px;
  background: #f7f9fc;
  border-radius: 8px;
  font-size: 1.1rem;
  text-align: right;

  strong {
    font-size: 1.2rem;
    color: #2c7;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    padding: 8px;
    font-size: 0.9rem;
    strong {
      font-size: 1rem;
    }
  }
`;

export const PayButton = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 1.1rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #218838;
  }
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    padding: 7px;
    font-size: 1rem;
  }  
`;
