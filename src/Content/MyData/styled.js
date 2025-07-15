import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #333;
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
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Message = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #333;
  text-align: center;
`;
