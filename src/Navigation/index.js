import { List, Link, Nav } from "./styled";
const Navigation = () => {
    
    const handleLinkClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        const navigationHeight = 170;
        const topPosition = targetElement.offsetTop - navigationHeight;
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth',
        });
      };

    return (
        <Nav>
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
        </Nav>
    );
};

export default Navigation;