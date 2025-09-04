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
