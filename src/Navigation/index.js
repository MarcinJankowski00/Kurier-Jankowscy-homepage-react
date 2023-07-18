import { List, Link, Nav, Header, Wrapper, Span } from "./styled";
const Navigation = () => {

    const handleLinkClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        const navigationHeight = document.querySelector('.fixed-navigation').offsetHeight;
        const topPosition = targetElement.offsetTop - navigationHeight - 5;
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth',
        });
    };

    return (
        <Nav className="fixed-navigation">
            <Wrapper>
                <Header>
                    KURIER<br /><Span>JANKOWSCY</Span>
                </Header>
                <List>
                    <li>
                        <Link href="#Aktualnosci" onClick={(event) => handleLinkClick(event, 'Aktualnosci')}>Aktualności</Link>
                    </li>
                    <li>
                        <Link href="#Onas" onClick={(event) => handleLinkClick(event, 'Onas')}>O nas</Link>
                    </li>
                    <li>
                        <Link href="#Oferta" onClick={(event) => handleLinkClick(event, 'Oferta')}>Oferta</Link>
                    </li>
                    <li>
                        <Link href="#Rozklad" onClick={(event) => handleLinkClick(event, 'Rozklad')}>Rozkład jazdy</Link>
                    </li>
                    <li>
                        <Link href="#Flota" onClick={(event) => handleLinkClick(event, 'Flota')}>Flota</Link>
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