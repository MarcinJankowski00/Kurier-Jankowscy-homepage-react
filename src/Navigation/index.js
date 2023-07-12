import { List, Link, Nav } from "./styled";
const Navigation = () => (
    <Nav>
        <List>
            <li>
                <Link href="#Aktualnosci">Aktualności</Link>
            </li>
            <li>
                <Link href="#Onas">O nas</Link>
            </li>
            <li>
                <Link href="#Oferta">Oferta</Link>
            </li>
            <li>
                <Link href="#Rozklad">Rozkład jazdy</Link>
            </li>
            <li>
                <Link href="#Kontakt">Kontakt</Link>
            </li>
        </List>
    </Nav>
)

export default Navigation;