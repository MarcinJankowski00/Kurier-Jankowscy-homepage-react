import styled, { css } from 'styled-components';

export const DecorativeShape = styled.div`
    position: absolute;
    width: 50%;
    height: 50%;
    background-color: red;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: transform 0.3s ease;
    

    &:nth-child(2) {
        bottom: 3%;
        left: 25%;
        background-color: ${({ theme }) => theme.color.teal};
    }

    &:nth-child(3) {
        bottom: 25%;
        right: 2%;
        background-color: ${({ theme }) => theme.color.crimson};
    }
    ${({ left }) => left && css`
        &:nth-child(3) {
            bottom: 25%;
            left: 2%;
            background-color: ${({ theme }) => theme.color.crimson};
        }
    `}
`;