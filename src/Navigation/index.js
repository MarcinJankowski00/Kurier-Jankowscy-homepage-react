import { List, Link, Nav, Img, Wrapper, Logo } from "./styled";
import handleLinkClick from "../HandleLinkClick.js";
import logo from "./kurierlogo.png";

const Navigation = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
      
    return (
        <Nav className="fixed-navigation">
            <Wrapper>
                <Logo href="#Start" onClick={scrollToTop}>
                    <Img src={logo} alt="KURIER" />
                </Logo>
                <List>
                    <li>
                        <Link href="#Aktualnosci" onClick={(event) => handleLinkClick(event, 'Aktualnosci')}>Aktualności</Link>
                    </li>
                    <li>
                        <Link href="#Rozklad" onClick={(event) => handleLinkClick(event, 'Rozklad')}>Rozkład jazdy</Link>
                    </li>
                    <li>
                        <Link href="#Oferta" onClick={(event) => handleLinkClick(event, 'Oferta')}>Oferta</Link>
                    </li>

                    <li>
                        <Link href="#Flota" onClick={(event) => handleLinkClick(event, 'Flota')}>Flota</Link>
                    </li>
                    <li>
                        <Link href="#Onas" onClick={(event) => handleLinkClick(event, 'Onas')}>O nas</Link>
                    </li>
                    <li>
                        <Link href="#Kontakt" onClick={(event) => handleLinkClick(event, 'Kontakt')}>Kontakt</Link>
                    </li>
                </List>
            </Wrapper >
        </Nav>
    );
};

export default Navigation;