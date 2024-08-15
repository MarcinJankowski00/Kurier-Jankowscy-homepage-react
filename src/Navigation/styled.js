import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(250px);
    display: none;
  }
  to {
    opacity: 1;
    transform: translateX(0);
    display: block;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
    display: block;
  }
  to {
    opacity: 0;
    transform: translateX(200px);
    display: none;
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
    grid-template-columns: 3fr 5fr;
    max-width: 1250px;
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

export const Logo = styled.a`
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
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding-left: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
        position: absolute;
        top: 46px;
        right: 0;
        background-color: ${({ theme }) => theme.color.gallery};
        padding: 10px 8px;
        margin: 0;
        box-shadow: 1px 17px 40px -12px rgba(66, 68, 90, 1);
        animation: ${({ isMenuOpen }) => (isMenuOpen ? fadeIn : fadeOut)} 0.5s ease-in-out;
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

export const Link = styled.a`
    color: ${({ theme }) => theme.color.font};
    text-decoration: none;

    &:focus {
        outline: none;
    }
    &:hover {
        filter: brightness(120%);
        padding-bottom: 5px;
        border-bottom: 1px solid ${({ theme }) => theme.color.font};
        outline: none;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            border-bottom: none;
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