import styled from "styled-components";
import { ReactComponent as PhoneIcon } from "../../icons/phone.svg"
import { ReactComponent as LocalizationIcon } from "../../icons/location.svg"
import { ReactComponent as ClockIcon } from "../../icons/clock.svg"
import { ReactComponent as MailIcon } from "../../icons/email.svg"

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
`;

export const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 60px;
    padding: 30px 0;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        grid-template-columns: 1fr;
        font-size: 18px;
        padding: 0;
    }   
`;
export const Segment = styled.div`
    max-width: 240px;
    margin-bottom: 35px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        margin-bottom: 20px;
    }   
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledMailIcon = styled(MailIcon)`
    width: 30px;
    fill: ${({ theme }) => theme.color.font};
`;

export const StyledClockIcon = styled(ClockIcon)`
    width: 30px;
    fill: ${({ theme }) => theme.color.font};
`;

export const StyledLocalizationIcon = styled(LocalizationIcon)`
    width: 29px;
    fill: ${({ theme }) => theme.color.font};
`;

export const StyledPhoneIcon = styled(PhoneIcon)`
    width: 30px;
    fill: ${({ theme }) => theme.color.font};
`;

export const Header = styled.h3`
    padding: 0;
    margin: 10px;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2px;
`;

export const Link = styled.a`
    display: contents;
    text-decoration: none;
    transition: 0.2s;
    color: ${({ theme }) => theme.color.font};
    &:hover {
        color: #4c90f4;
    }  
`;

export const ImageWrapper = styled.div`
    position: relative;
    max-width: 500px;
    width: 100%;
    border-radius: 5px;
    padding: 30px ;
    overflow: hidden;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;

export const Image = styled.img`
    position: relative;
    z-index: 2;
    max-width: 440px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;