import styled from "styled-components";
import { ReactComponent as LoopIcon } from "./icons/loop.svg"
import { ReactComponent as MagnifierIcon } from "./icons/magnifier.svg"

export const Form = styled.div`
    justify-self: end;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        grid-column-start: 1;
        grid-row-start: 1;
    }
`;

export const Container = styled.div`
    background-color: ${({ theme }) => theme.color.search};
    color: ${({ theme }) => theme.color.teal};
    backdrop-filter: blur(15px);
    min-width: 430px;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0px 0px 13px 0px ${({ theme }) => theme.color.silver};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        margin-bottom: 20px;
        margin-top: 0px;
        max-width: 1000px;
        min-width: 0;
    }
`;

export const Header = styled.h2`
    margin: 0;
    margin-bottom: 20px;
    font-size: 26px;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        font-size: 22px;
    }
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
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        font-size: 16px;
    }
`;

export const Switch = styled.div`
    display: flex;
    align-items: center;
    padding: 36px 1%;
    margin-bottom: 18px;
    border: 1px solid;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.teal};
    border-radius: 5px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        filter: brightness(125%);
    }
    &:active {
        filter: brightness(135%);
    }
`;

export const StyledLoopIcon = styled(LoopIcon)`
    width: 22px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax22}px) {
        width: 18px;
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
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
            font-size: 15px;
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
    padding: 12px 24px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        filter: brightness(125%);
    }
    &:active {
        filter: brightness(135%);
    }
`;

export const Text = styled.p`
    padding: 0;
    margin: 0;
`;

export const StyledMagnifierIcon = styled(MagnifierIcon)`
    width: 20px;
    margin-right: 10px;
    fill: ${({ theme }) => theme.color.white};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax22}px) {
        width: 15px;
    }
`;