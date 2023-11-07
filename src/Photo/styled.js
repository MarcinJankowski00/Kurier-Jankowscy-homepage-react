import styled from "styled-components";
import background from "./background.jpg";


export const Image = styled.div`
    height: 770px;
    position: relative;
    overflow: hidden;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
            height: 100vh;
        }
`;

export const Background = styled.div`
  position: absolute;
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
    display: flex;
    position: relative;
    flex-direction: row;
    width: 100%;
    height: 770px;
    padding-top: 60px;
    padding-left: 10%;
    padding-right: 10%;
    justify-content: center;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            flex-direction: column-reverse;
            padding-left: 5%;
            padding-right: 5%;
            padding-top: 0px;
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
            height: 105vh;
        }
`;

export const Text = styled.div`
    color: white;
    font-weight: bold;
    font-size: 45px;
    margin-right: 280px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            display: none;
        }
`;
export const Buttons = styled.div`
    color: white;
    font-weight: bold;
    font-size: 45px;
    margin-right: 130px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin: 0;
        }
`;

export const Span = styled.span`
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button`
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.color.crimson};
    background-color: ${({ theme }) => theme.color.crimson};
    color: #fff;
    margin-right: 10px;
    padding: 12px 24px;
    width: 257px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.color.black};
        border: 1px solid ${({ theme }) => theme.color.black};
        transition: 0.5s;
        color: ${({ theme }) => theme.color.white};;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 100%;
        }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            font-size: 15px;
        }
`;