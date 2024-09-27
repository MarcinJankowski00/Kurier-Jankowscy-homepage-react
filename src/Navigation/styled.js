import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled, { keyframes, css } from 'styled-components';

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
    grid-template-columns: 1fr auto;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
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
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
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
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 250px;
        }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            width: 210px;
        }
`;

export const List = styled.ul`
    display: grid;
    grid-gap: 60px;
    grid-template-columns: auto auto auto auto auto;
    list-style: none;
    padding-left: 0;
    margin-right: 20px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: block;
        position: absolute;
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
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 10px 30px;
        text-align: center;
        border-bottom: 1px solid ${({ theme }) => theme.color.font};
        ${({ last }) => last && css`
            border-bottom: none;
            padding-bottom: 5px;
        `}
    }
`;

export const Link = styled(NavLink)`
    position: relative;
    color: ${({ theme }) => theme.color.font};
    text-decoration: none;
    padding-bottom: 5px;
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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        &.active {
            font-weight: bolder;
            &::after {
                width: 0;
            }
        }
    }
`;

export const HamburgerIcon = styled.div`
    display: none;
    cursor: pointer;
    font-size: 2rem;
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: block;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        font-size: 24px;
    }
`;