import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            grid-template-columns: 1fr;
        }
`;

export const List = styled.div`
    padding-top: 0;
    padding-right: 14px;
    font-size: smaller;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    margin-bottom: 15.5%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            flex-direction: row;
            margin-bottom: 0;
            justify-content: space-between;
            font-size: 4px;
        }
`;

export const Button = styled.button`
    font-size: smaller;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 0;
    margin-bottom: 4px;
    flex-grow: 1;
    width: 100%;
    max-height: 40px;
    white-space: nowrap;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
    }

    &:active {
        box-shadow: 0px 0px 1px 1px #020202;
        filter: brightness(120%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            flex-grow: unset;
            padding: 5px;
            margin-bottom: 0;
            margin-right: 4px;
        }
`;

