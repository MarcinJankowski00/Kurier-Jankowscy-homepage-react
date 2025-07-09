import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled, { keyframes, css } from 'styled-components';
import { ReactComponent as PersonIcon } from "../icons/person.svg"

const fadeIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const Nav = styled.div`
    background-color: ${({ theme }) => theme.color.navigation};
    padding: 1px;
    position: fixed ;
    width: 100%;
    z-index: 998;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax1}px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0;
    padding: 0 6px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax1}px) {
            margin: 10px 5px;
        }
`;

export const Logo = styled(NavLink)`
    display: block;
    cursor: pointer;
`;

export const Img = styled.img`
    display: block;
    visibility: visible;
    width: 280px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax1}px) {
            width: 250px;
        }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            width: 210px;
        }
`;

export const List = styled.ul`
    display: grid;
    grid-gap: 60px;
    grid-template-columns: auto auto auto auto auto auto;
    list-style: none;
    padding-left: 0;
    margin-right: 20px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax1}px) {
        display: block;
        position: absolute;
        font-size: 20px;
        top: 46px;
        right: 0;
        background-color: ${({ theme }) => theme.color.gallery};
        padding: 10px 8px;
        margin: 0;
        box-shadow: 1px 17px 40px -12px rgba(66, 68, 90, 1);
        animation: ${({ isMenuOpen }) => isMenuOpen ? fadeIn : fadeOut} 0.3s forwards;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        top: 42px;
    }
`;

export const Item = styled.li`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax1}px) {
        padding: 16px 30px;
        text-align: center;
        border-bottom: 1px solid ${({ theme }) => theme.color.font};
        ${({ last }) => last && css`
            border-bottom: none;
            padding-bottom: 8px;
        `}
    }
`;

export const Link = styled(NavLink)`
    position: relative;
    color: ${({ theme }) => theme.color.font};
    text-decoration: none;
    transition: color 0.3s;
    
    &:focus {
        outline: none;
    }

    &:hover {
        filter: brightness(120%);
        color: ${({ theme }) => theme.color.font};
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        background-color: ${({ theme }) => theme.color.font};
        width: 0;
        transition: 0.3s ease;
    }

    &:hover::after {
        filter: brightness(120%);
        width: 100%;
    }

    &.active {
        color: ${({ theme }) => theme.color.font};
        &::after {
            width: 100%;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax1}px) {
        &.active {
            font-weight: bolder;
            &::after {
                width: 0;
            }
        }

        &:hover::after {
            width: 0;
        }
    }
`;

export const HamburgerIcon = styled.div`
    display: none;
    cursor: pointer;
    font-size: 2rem;
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax1}px) {
        display: block;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        font-size: 24px;
    }
`;

export const StyledPersonIcon = styled(PersonIcon)`
    width: 20px;
    fill: ${({ theme }) => theme.color.font};
`;

export const LogButton = styled.button`
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.font};
    background-color:${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.font};
    padding: 10px 18px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        filter: brightness(125%);
    }
    &:active {
        filter: brightness(135%);
    }
`;