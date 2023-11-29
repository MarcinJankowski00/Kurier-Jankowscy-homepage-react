import styled from 'styled-components';

export const CookieInfoContainer = styled.div`
    display: ${props => (props.show ? 'block' : 'none')};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgb(230 230 230 / 90%);
    backdrop-filter: blur(12px);
    padding: 10px;
    text-align: center;
    z-index: 999;
`;

export const CloseButton = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    &:hover {
        filter: brightness(120%);
        transition: 0.5s;
    }
    &:active {
        filter: brightness(140%);
    }
`;