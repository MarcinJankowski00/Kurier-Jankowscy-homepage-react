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
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    gap: 1rem;
    margin: 1rem auto;
    padding: 1rem;
  }  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: #333;

  input[type="radio"] {
    margin-right: 0.5rem;
  }

  & > label {
    font-weight: 500;
    margin-top: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    gap: 0.5rem;
    color: #333;

    input[type="radio"] {
      margin-right: 0.4rem;
    }

    & > label {
      margin-top: 0.4rem;
    }
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
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    font-size: 1.1rem;
    margin-top: 0.8rem;
  }
`;