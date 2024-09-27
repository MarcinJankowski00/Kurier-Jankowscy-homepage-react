import styled from "styled-components";
import background from "./background.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export const Image = styled.div`
    height: 70vh;
    position: relative;
    overflow: hidden;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        height: 95vh;
    }
`;

export const Wrapper = styled.div`
    
`;

export const Background = styled.div`
  position: absolute;
  filter: brightness(75%);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("${background}");
  background-size: cover;
  background-position: center;
  transform: translate3d(0, ${props => props.offset}px, 0);
  z-index: -1;
`;

export const Content = styled.div`
    display: grid;
    
    grid-template-columns: 1.7fr 1fr;
    width: 100%;
    height: 70vh;
    justify-content: center;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            display: flex;
            flex-direction: column-reverse;
            align-items: normal;      
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
            height: 95vh;
        }
`;

export const Text = styled.div`
    color: white;
    font-weight: bold;
    font-size: 45px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            display: none;
        }
`;
export const Buttons = styled.div`
    color: white;
    font-size: 45px;
    margin-right: 130px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin: 0;
        }
`;

export const Span = styled.span`
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Button = styled(Link)`
    display: inline-block;
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.color.crimson};
    background-color: ${({ theme }) => theme.color.crimson};
    color: #fff;
    margin-right: 10px;
    padding: 12px 24px;
    width: 257px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.color.black};
        border: 1px solid ${({ theme }) => theme.color.black};
        color: ${({ theme }) => theme.color.white};;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 100%;
        }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            font-size: 15px;
        }
`;