import { useState } from "react";
import { List, Item, Link, Nav, Img, Wrapper, Logo, HamburgerIcon, LogoWrapper } from "./styled";
import handleLinkClick from "../HandleLinkClick.js";
import logo from "../kurierlogo.png";

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

    const closeMenuOnLinkClick = (event, section) => {
        handleLinkClick(event, section);
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
                        <Link href="#Aktualnosci" onClick={(event) => closeMenuOnLinkClick(event, 'Aktualnosci')}>Aktualności</Link>
                    </Item>
                    <Item>
                        <Link href="#Rozklad" onClick={(event) => closeMenuOnLinkClick(event, 'Rozklad')}>Rozkład jazdy</Link>
                    </Item>
                    <Item>
                        <Link href="#Oferta" onClick={(event) => closeMenuOnLinkClick(event, 'Oferta')}>Oferta</Link>
                    </Item>

                    <Item>
                        <Link href="#Flota" onClick={(event) => closeMenuOnLinkClick(event, 'Flota')}>Flota</Link>
                    </Item>
                    <Item>
                        <Link href="#Onas" onClick={(event) => closeMenuOnLinkClick(event, 'Onas')}>O nas</Link>
                    </Item>
                    <Item>
                        <Link href="#Kontakt" onClick={(event) => closeMenuOnLinkClick(event, 'Kontakt')}>Kontakt</Link>
                    </Item>
                </List>
            </Wrapper >
        </Nav>
    );
};

export default Navigation;