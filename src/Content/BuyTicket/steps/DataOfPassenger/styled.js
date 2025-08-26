import styled from 'styled-components';

export const FormWrapper = styled.div`
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

export const Section = styled.div`
  margin-bottom: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    margin-bottom: 0px;
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    margin-bottom: 6px;
  }  
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    margin-bottom: 6px;
  }  
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    margin-top: 2px;
    padding: 5px 6px;
  }  
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    margin-top: 6px;
  }  
`;

export const RadioLabel = styled.label`
  margin-bottom: 8px;
  font-weight: 400;
  input {
    margin-right: 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    margin-bottom: 4px;
    input {
      margin-right: 4px;
    }
  } 
`;

export const ExtraFields = styled.div`
  margin-top: 20px;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 6px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    padding: 8px;
  } 
`;
