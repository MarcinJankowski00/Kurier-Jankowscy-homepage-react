import styled from 'styled-components';

export const PortalDropdownListStyled = styled.ul`
  position: absolute;
  z-index: 9999;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  list-style: none;
  max-height: 250px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 280px;
  width: 100%;
      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 200px;
    }
`;

export const DropdownWrapper = styled.div`
  width: 200px;
  position: relative;
  font-size: 18px;
  
`;

export const DropdownHeader = styled.div`
  padding: 10px 16px;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Selected = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
  text-align: start;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 4px 0 0 0;
  padding: 0;
  list-style: none;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
  max-height: 250px;
  overflow-y: auto;
`;

export const DropdownItem = styled.li`
  padding: 10px 16px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  transition: background 0.2s ease;
  color: #333;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
    color: #666;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Span = styled.span`
    display: flex;
    text-align: start;
`;
