import styled from "styled-components";

export const Form = styled.div`
    background-color: #ffffffe6;
    color: ${({ theme }) => theme.color.teal};
    width: 440px;
    padding: 20px;
    margin-top: 100px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.teal};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 100%;
            max-width: 530px;
            margin-bottom: 20px;
            margin-top: 0px;
        }
`;

export const Header = styled.h1`
    margin: 0;
    margin-bottom: 35px;
    font-size: 30px;
    text-align: center;
`;

export const Element = styled.div`
    text-align: left;
    padding-left: 30px;
    padding-right: 30px;
`;

export const Text = styled.span`
    display: inline-block;
    width: 20%;
`;

export const Select = styled.select`
    border: 1px solid;
    padding: 10px;
    width: 100%;
    max-width: 265px;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    border-radius: 5px;
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.color.teal};
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 12px 24px;
    cursor: pointer;
    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(110%);
    }
`;