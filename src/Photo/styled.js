import styled from "styled-components";
import background from "./background.jpg";

export const Image = styled.div`
    display: flex;
    width: 100%;
    height: 880px;
    align-items: center;
    justify-content: center;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
`;

export const Text = styled.div`
    width: 60%;
    color: white;
    font-weight: bold;
    font-size: 45px;
    padding-top: 100px;
    
`;