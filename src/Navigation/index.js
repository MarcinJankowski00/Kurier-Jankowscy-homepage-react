import { useState } from "react";
import { List, Item, Link, Nav, Img, Wrapper, Logo, HamburgerIcon, LogoWrapper } from "./styled";
import logo from "../kurierlogo.png";
import { toAboutUs, toContact, toFleat, toOffer, toSchedule, toStart } from "../routes.js";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenuOnLinkClick = () => {
        setIsMenuOpen(false);
        scrollToTop();
    };

    return (
        <Nav className="fixed-navigation">
            <Wrapper>
                <LogoWrapper>
                    <Logo to={toStart()} onClick={closeMenuOnLinkClick}>
                        <Img src={logo} alt="Logo Kurier" />
                    </Logo>
                </LogoWrapper>
                <HamburgerIcon onClick={toggleMenu}>
                    ☰
                </HamburgerIcon>
                <List isMenuOpen={isMenuOpen}>
                    <Item>
                        <Link to={toSchedule()} onClick={closeMenuOnLinkClick}>Rozkład jazdy</Link>
                    </Item>
                    <Item>
                        <Link to={toOffer()} onClick={closeMenuOnLinkClick}>Oferta</Link>
                    </Item>
                    <Item>
                        <Link to={toFleat()} onClick={closeMenuOnLinkClick}>Flota</Link>
                    </Item>
                    <Item>
                        <Link to={toAboutUs()} onClick={closeMenuOnLinkClick}>O nas</Link>
                    </Item>
                    <Item last={true}>
                        <Link to={toContact()} onClick={closeMenuOnLinkClick}>Kontakt</Link>
                    </Item>
                </List>
            </Wrapper >
        </Nav>
    );
};

export default Navigation;