import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding-top: 24px;
  font-family: Arial, sans-serif;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    padding: 0;
    font-size: 0.9rem;
  }
`;

export const StepHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    margin-bottom: 12px;
    font-size: 0.7rem;
  }
`;

export const StepIndicator = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  border-bottom: 3px solid ${props => (props.active ? '#007BFF' : '#ccc')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  color: ${props => (props.active ? '#007BFF' : '#888')};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    padding: 5px;
  }
`;

export const StepTitle = styled.h2`
  margin-bottom: 16px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    margin-bottom: 8px;
  }
`;

export const StepContent = styled.div`
  min-height: 300px;
  padding: 16px;
  background: #f8f8f8;
  border-radius: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
    padding: 8px;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const NavButton = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

