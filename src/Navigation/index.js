import { useState, useEffect, useRef } from "react";
import { List, Item, Link, Nav, Img, Wrapper, Logo, HamburgerIcon, LogoWrapper, LogButton, AccountIcon, AccountList, AccountListItem, AccountListLink, DropdownWrapper, LogIcon, LogList, StyledPersonIcon } from "./styled";
import logo from "../kurierlogo.png";
import { toAboutUs, toBuyTicket, toContact, toFleat, toMyData, toMyTickets, toOffer, toSchedule, toStart } from "../routes.js";
import Modal from "../Modal/index.js";
import AuthForm from "../AuthForm/index.js";
import { useAuth } from "../context/AuthContext.js";
import DeleteAccount from "../DeleteAccount/index.js";

const Navigation = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const { isLoggedIn, logout } = useAuth();
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const accountMenuRef = useRef(null);
    const accountRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleAccountMenu = () => {
        setIsAccountMenuOpen(!isAccountMenuOpen);
    };

    const closeMenuOnLinkClick = () => {
        setIsMenuOpen(false);
        scrollToTop();
    };

    const closeAccountMenuOnLinkClick = () => {
        setIsAccountMenuOpen(false);
        scrollToTop();
    };

    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            hamburgerRef.current &&
            !hamburgerRef.current.contains(event.target)
        ) {
            setIsMenuOpen(false);
        }
    };

    const handleClickOutsideAccountMenu = (event) => {
        if (
            accountMenuRef.current &&
            !accountMenuRef.current.contains(event.target) &&
            accountRef.current &&
            !accountRef.current.contains(event.target)
        ) {
            setIsAccountMenuOpen(false);
        }
    };

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const openDeleteModal = () => {
        setDeleteModalOpen(true);
    };
    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    };

    useEffect(() => {
        if (isAccountMenuOpen) {
            document.addEventListener("click", handleClickOutsideAccountMenu);
        } else {
            document.removeEventListener("click", handleClickOutsideAccountMenu);
        }
        return () => {
            document.removeEventListener("click", handleClickOutsideAccountMenu);
        };
    }, [isAccountMenuOpen]);

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <Nav className="fixed-navigation">
            <Wrapper>
                <LogoWrapper>
                    <Logo to={toStart()} onClick={closeMenuOnLinkClick}>
                        <Img src={logo} alt="Logo Kurier" />
                    </Logo>
                </LogoWrapper>
                <HamburgerIcon onClick={toggleMenu} ref={hamburgerRef}>
                    ☰
                </HamburgerIcon>
                <List isMenuOpen={isMenuOpen} ref={menuRef}>
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
                <DropdownWrapper>
                    {isLoggedIn ?
                        <>
                            <AccountIcon onClick={toggleAccountMenu} ref={accountRef}>
                                <StyledPersonIcon />
                            </AccountIcon>
                            <AccountList isMenuOpen={isAccountMenuOpen} ref={accountMenuRef}>
                                <AccountListItem>
                                    <AccountListLink to={toBuyTicket()} onClick={closeAccountMenuOnLinkClick}>Kup bilet</AccountListLink>
                                </AccountListItem>
                                <AccountListItem>
                                    <AccountListLink to={toMyTickets()} onClick={closeAccountMenuOnLinkClick}>Moje bilety</AccountListLink>
                                </AccountListItem>
                                <AccountListItem>
                                    <AccountListLink to={toMyData()} onClick={closeAccountMenuOnLinkClick}>Moje dane</AccountListLink>
                                </AccountListItem>
                                <AccountListItem>
                                    <AccountListLink to={"/"} onClick={openDeleteModal}>Usuń konto</AccountListLink>
                                </AccountListItem>
                                <AccountListItem last={true}>
                                    <AccountListLink
                                        to={"/"}
                                        onClick={() => {
                                            logout();
                                            closeAccountMenuOnLinkClick();
                                        }}
                                    >
                                        Wyloguj się
                                    </AccountListLink>
                                </AccountListItem>
                            </AccountList>
                        </> :
                        <>
                            <LogButton onClick={openModal}>
                                Zaloguj
                            </LogButton>
                            <LogIcon onClick={toggleAccountMenu} ref={accountRef}>
                                ☰
                            </LogIcon>
                            <LogList isMenuOpen={isAccountMenuOpen} ref={accountMenuRef}>
                                <AccountListItem>
                                    <AccountListLink
                                        to={"/"}
                                        onClick={() => {
                                            closeAccountMenuOnLinkClick();
                                            openModal();
                                        }}
                                    >
                                        Zaloguj
                                    </AccountListLink>
                                </AccountListItem>
                                <AccountListItem last={true}>
                                    <AccountListLink
                                        to={"/"}
                                        onClick={() => {
                                            closeAccountMenuOnLinkClick();
                                            openModal();
                                        }}
                                    >
                                        Załóż konto
                                    </AccountListLink>
                                </AccountListItem>
                            </LogList>
                        </>
                    }
                </DropdownWrapper>
            </Wrapper>
            <Modal isModalOpen={isModalOpen} onClose={closeModal}>
                <AuthForm isModalOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            </Modal>
            <Modal isModalOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
                <DeleteAccount isModalOpen={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)} />
            </Modal>
        </Nav>
    );
};

export default Navigation;