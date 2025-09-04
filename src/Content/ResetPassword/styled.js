import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 40px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.font};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    filter: brightness(110%);
  }
`;

export const Message = styled.p`
  margin-top: 16px;
  font-size: 0.95rem;
  color: ${({ error }) => (error ? "red" : "green")};
`;

export const ToggleButton = styled.button`
  margin-top: 16px;
  background: transparent;
  border: none;
  color: #007bff;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const PasswordRequirements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 16px 0;
  font-size: 0.9rem;
`;

export const RequirementItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: ${(props) => (props.met ? "green" : "red")};

  &::before {
    content: "${(props) => (props.met ? "✅" : "❌")}";
    display: inline-block;
    width: 24px;
    margin-right: 8px;
    text-align: center;
  }
`;
