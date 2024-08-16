import { useState } from "react";
import { List, Item, Link, Nav, Img, Wrapper, Logo, HamburgerIcon, LogoWrapper } from "./styled";
import handleLinkClick from "../HandleLinkClick.js";
import logo from "../kurierlogo.png";
import { toAboutUs, toContact, toFleat, toOffer, toSchedule, toStart } from "../routes.js";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenuOnLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <Nav className="fixed-navigation">
            <Wrapper>
                <LogoWrapper>
                    <Logo onClick={scrollToTop}>
                        <Img src={logo} alt="KURIER" />
                    </Logo>
                </LogoWrapper>
                <HamburgerIcon onClick={toggleMenu}>
                    ☰
                </HamburgerIcon>
                <List isMenuOpen={isMenuOpen}>
                    <Item>
                        <Link to={toStart()} onClick={(event) => closeMenuOnLinkClick()}>Aktualności</Link>
                    </Item>
                    <Item>
                        <Link to={toSchedule()} onClick={(event) => closeMenuOnLinkClick()}>Rozkład jazdy</Link>
                    </Item>
                    <Item>
                        <Link to={toOffer()} onClick={(event) => closeMenuOnLinkClick()}>Oferta</Link>
                    </Item>
                    <Item>
                        <Link to={toFleat()} onClick={(event) => closeMenuOnLinkClick()}>Flota</Link>
                    </Item>
                    <Item>
                        <Link to={toAboutUs()} onClick={(event) => closeMenuOnLinkClick()}>O nas</Link>
                    </Item>
                    <Item last={true}>
                        <Link to={toContact()} onClick={(event) => closeMenuOnLinkClick()}>Kontakt</Link>
                    </Item>
                </List>
            </Wrapper >
        </Nav>
    );
};

export default Navigation;