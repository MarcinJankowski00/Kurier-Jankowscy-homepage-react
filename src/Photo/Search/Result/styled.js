import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
    font-size: 20px;
`;

export const Heading = styled.div`
    text-align: center;
    margin-top: 10px;
    ${({ empty }) => empty && css`
        margin-top: 6px;
    `}
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
`;

export const ListContainer = styled.div`
    padding: 0;
    margin: 0;
`;

export const List = styled.ul`
    list-style: none;
    padding-inline-start: 0;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 0;
    margin-bottom: 0;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
    }
    
`;

export const Item = styled.li`
    border-bottom: 2px solid ${({ theme }) => theme.color.alto};
    padding: 10px;
    text-align: center;
    ${({ past }) => past && css`
        display: none;
        color: grey;
        font-size: 18px;
        animation: ${fadeIn} 0.5s ease-in-out;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 16px;
        }
    `}
    ${({ show }) => show && css`
        display: list-item;
    `}
`;

export const Span = styled.span`
    color: gray;
`;

export const DepartureTime = styled.span`
    filter: brightness(130%);
    ${({ isdateactual }) => isdateactual && css`
        display: none;
    `}
`;

export const Div = styled.div`
    text-align: center;
    margin: 0;
    padding: 0;
`;

export const ShowButton = styled.button`
    cursor: pointer;
    border: none;
    color: gray;
    margin-top: 5px;
    border-radius: 5px;
    &:hover{
        filter: brightness(120%);
        transition: 0.5s;
    }
    ${({ isdateactual }) => isdateactual && css`
        display: none;
    `}
`;
