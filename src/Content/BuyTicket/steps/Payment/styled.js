import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 16px;
  text-align: center;
`;

export const MethodsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

export const MethodItem = styled.button`
  padding: 12px 16px;
  font-size: 1rem;
  background: ${({ selected }) => (selected ? "#007bff" : "#f0f0f0")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: ${({ selected }) => (selected ? "#0066cc" : "#e2e2e2")};
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
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 12px;
  font-size: 0.9rem;
  text-align: center;
`;

