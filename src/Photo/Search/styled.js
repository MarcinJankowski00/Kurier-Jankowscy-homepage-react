import styled from "styled-components";

export const Form = styled.form`
    background-color: ${({ theme }) => theme.color.white};
    width: 700px;
    padding: 20px;
    margin-top: 100px;
`;

export const Header = styled.h1`
    margin: 0;
    margin-bottom: 35px;
`;

export const Element = styled.div`
    text-align: left;
    padding-left: 30px;
    padding-right: 30px;
`;

export const Text = styled.span`
    display: inline-block;
    width: 40%;
`;

export const Select = styled.select`
    border: 1px solid;
    padding: 10px;
    width: 100%;
    max-width: 265px;
    border-radius: 5px;
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 20px -4px ${({ theme }) => theme.color.black};
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
        box-shadow: none;
    }
`;