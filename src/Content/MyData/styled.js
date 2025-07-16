import styled from "styled-components";

export const Container = styled.div`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FieldGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  display: block;
  color: #222;
`;

export const Input = styled.input`
  padding: 0.6rem;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
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


