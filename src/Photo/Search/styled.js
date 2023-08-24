import styled from "styled-components";

export const Form = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.teal};
    max-width: 460px;
    padding: 20px 30px;
    border-radius: 5px;
    box-shadow: 0px 0px 13px 0px ${({ theme }) => theme.color.silver};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 100%;
            max-width: 460px;
            margin-bottom: 20px;
            margin-top: 0px;
        }
`;

export const Header = styled.h2`
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
`;

export const Element = styled.div`
    padding-left: 15px;
    padding-right: 15px;
`;

export const Span = styled.span`
    display: inline-block;
    width: 20%;
`;

export const Text = styled.p`
    padding: 0;
    margin: 0;
`;

export const Wrapper = styled.div`
    display: flex;
    padding: 0;
    align-items: center;
    margin: 0;
    max-width: 360px;
`;

export const Div = styled.p`
    padding: 0;
    margin: 0;
`;

export const DateDiv = styled.p`
    max-width: 90%;
`;

export const Magnifiericon = styled.img`
    width: 30px;
    `;

export const Switchicon = styled.img`
    width: 15px;
    `;

export const Select = styled.select`
    border: 1px solid;
    padding: 10px;
    width: 80%;
    border-radius: 5px;
    margin-top: 4px;
    background-color: white;
`;

export const Input = styled.input`
    border: 1px solid;
    padding: 4px;
    max-width: 140px;
    border-radius: 5px;
    background-color: white;
    font-size: 17px;
`;

export const Switch = styled.button`
    margin-left: 3px;
    border: 1px solid;
    height: 50px;
    margin-top: 8px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        filter: brightness(110%);
        transition: 0.5s;
    }
    &:active {
        filter: brightness(110%);
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.color.teal};
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 9px 24px;
    cursor: pointer;
    &:hover {
        filter: brightness(120%);
        transition: 0.5s;
    }
    &:active {
        filter: brightness(120%);
    }
    `;