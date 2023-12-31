import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
            grid-template-columns: 1fr;
        }
`;

export const Div = styled.div`
    margin-top: 30px;
    padding-top: 0;
    padding-right: 14px;
    font-size: smaller;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 74px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
            margin-bottom: 0;
            margin-top: 0;
            justify-content: space-between;
            padding-right: 0;
        }
`;

export const Button = styled.button`
    font-size: 15px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 0;
    margin-bottom: 4px;
    width: 100%;
    height: 42px;
    max-height: 42px;
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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
            flex-grow: unset;
            padding: 9px;
            margin-right: 4px;
            font-size: 13px;
            height: 100%
        }
`;

