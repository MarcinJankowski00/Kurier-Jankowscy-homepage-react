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
`;

export const Section = styled.div`
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 12px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

export const RadioLabel = styled.label`
  margin-bottom: 8px;
  font-weight: 400;
  input {
    margin-right: 8px;
  }
`;

export const ExtraFields = styled.div`
  margin-top: 20px;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 6px;
`;
