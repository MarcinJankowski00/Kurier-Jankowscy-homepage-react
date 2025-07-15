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
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

export const List = styled.ul`
    list-style: none;
    padding-inline-start: 0;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 0;
    margin-bottom: 0;
    max-height: 310px;
    overflow-y: auto;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 15px;
        max-height: 25vh;
    }
    
`;

export const Item = styled.li`
    border-bottom: 2px solid ${({ theme }) => theme.color.hoursBorder};
    padding: 10px;
    text-align: center;
    ${({ past }) => past && css`
        display: none;
        color: ${({ theme }) => theme.color.lessImportant};
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
    color: ${({ theme }) => theme.color.lessImportant};
`;

export const Text = styled.span`
    display: none;
    filter: brightness(130%);
    ${({ show }) => show && css`
        display: inline;
    `}
`;

export const Price = styled.div`
    display: none;
    filter: brightness(130%);
    margin: 15px auto 10px auto;
    max-width: 500px;
    ${({ show }) => show && css`
        display: grid;
        grid-gap: 8px;
    `}
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
`;

export const Empty = styled.div`
    display: none;
    text-align: center;
    margin-bottom: 10px;
    ${({ show }) => show && css`
        display: block;
    `}
`;

export const ShowButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.color.brigtherLessImportant};
    color: ${({ theme }) => theme.color.lessImportant};
    margin-top: 5px;
    border-radius: 5px;
    transition: 0.5s;
    &:hover{
        filter: brightness(120%);
    }
    ${({ isdateactual }) => isdateactual && css`
        display: none;
    `}
`;

export const NextDayButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.fontOnButton};
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px;
    align-self: center;
    width: 190px;
    transition: 0.5s;
    &:hover{
        filter: brightness(120%);
    }
    ${({ isdateactual }) => isdateactual && css`
        display: none;
    `}
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax22}px) {
        width: 143px;
    }
`;

export const Label = styled.label`
    font-size: 15px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 12px;
    }
`;