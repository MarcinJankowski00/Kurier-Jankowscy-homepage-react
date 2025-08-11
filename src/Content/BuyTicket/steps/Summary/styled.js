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
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.span`
  font-weight: 500;
  color: #555;
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
`;
