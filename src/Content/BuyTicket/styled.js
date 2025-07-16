import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1rem;
  color: #333;

  input[type="radio"] {
    margin-right: 0.5rem;
  }

  & > label {
    font-weight: 500;
    margin-top: 0.5rem;
  }
`;

export const Span = styled.span`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const Price = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #007bff;
  margin-top: 1rem;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  margin-top: 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.teal};
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  padding: 12px 24px;
  transition: 0.5s;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    filter: brightness(125%);
  }
  &:active {
    filter: brightness(135%);
  }
`;
