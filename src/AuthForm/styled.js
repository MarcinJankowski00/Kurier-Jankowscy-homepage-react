import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #005fcc;
  }
`;

export const ToggleButton = styled.button`
  margin-top: 1rem;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
`;

export const Message = styled.p`
  margin-top: 1rem;
  color: #333;
`;