import styled from "styled-components";

export const Form = styled.div`
    background-color: #ffffffe6;
    color: ${({ theme }) => theme.color.teal};
    width: 440px;
    padding: 20px;
    margin-top: 100px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.grey};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 100%;
            max-width: 530px;
            margin-bottom: 20px;
            margin-top: 0px;
        }
`;

export const Header = styled.h1`
    margin: 0;
    margin-bottom: 25px;
    font-size: 30px;
    text-align: center;
`;

export const Element = styled.div`
    text-align: left;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Text = styled.span`
    display: inline-block;
    width: 20%;
`;

export const Wrapper = styled.div`
    display: flex;
    padding: 0;
    align-items: center;
    margin: 0;
`;

export const Div = styled.div`
    padding: 0;
    margin: 0;
`;

export const Select = styled.select`
    border: 1px solid;
    padding: 10px;
    width: 80%;
    max-width: 265px;
    border-radius: 5px;
    margin-top: 16px;
`;

export const Switch = styled.button`
    margin-left: 5px;
    height: 70px;
    margin-top: 8px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(110%);
    }
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