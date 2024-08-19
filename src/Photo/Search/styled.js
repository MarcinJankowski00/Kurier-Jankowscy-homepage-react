import styled from "styled-components";

export const Form = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-column-start: 1;
        grid-row-start: 1;
    }
`;

export const Container = styled.div`
    background-color: ${({ theme }) => theme.color.search};
    color: ${({ theme }) => theme.color.teal};
    font-size: px;
    backdrop-filter: blur(10px);
    width: 100%;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0px 0px 13px 0px ${({ theme }) => theme.color.silver};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
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

`;

export const Wrapper = styled.div`
    display: flex;
    padding: 0;
    margin: 0;
`;

export const Div = styled.div`
    padding: 0;
    margin-right: 13px;
    width: 100%;
`;

export const Label = styled.div`
    margin-bottom: 18px;
`;

export const Span = styled.span`
    display: inline-block;
    width: 20%;
    text-align: center;
`;

export const Select = styled.select`
    border: 1px solid gray;
    color: black;
    padding: 0 9px;
    height: 50px;
    width: 80%;
    border-radius: 5px;
    background-color: white;
`;

export const Switch = styled.div`
    display: flex;
    align-items: center;
    padding: 36px 2%;
    margin-bottom: 18px;
    border: 1px solid;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.teal};
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

export const Switchicon = styled.img`
    display: block;
    width: 18px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 15px;
    }
`;


export const DateDiv = styled.div`
    max-width: 90%;
    margin-bottom: 18px;
`;

export const Input = styled.input`
    color: black;
    border: 1px solid gray;
    padding: 4px;
    max-width: 140px;
    height: 30px;
    border-radius: 5px;
    background-color: white;
    font-size: 17px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
            font-size: 13px;
        }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.teal};
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 8px 24px;
    cursor: pointer;
    &:hover {
        filter: brightness(120%);
        transition: 0.5s;
    }
    &:active {
        filter: brightness(120%);
    }
`;

export const Text = styled.p`
    padding: 0;
    margin: 0;
`;

export const Magnifiericon = styled.img`
    width: 30px;
`;