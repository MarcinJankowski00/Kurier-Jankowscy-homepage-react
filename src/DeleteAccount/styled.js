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
  gap: 20px;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem;
  background: ${({ theme }) => theme.color.font};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
     filter: brightness(125%);
  }
  &:active {
      filter: brightness(135%);
  }
`;

export const Message = styled.p`
  margin-top: 1rem;
  color: #333;
`;