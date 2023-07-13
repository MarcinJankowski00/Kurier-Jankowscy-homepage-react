import { Container, List, Link, } from "./styled";
import Window from './Window';

const Flota = () => (

    <Container>
        <List>
            <li>
                <Link href="#">Volkswagen Caravelle 8+1</Link>
            </li>
            <li>
                <Link href="#">Opel Vivaro 8+2 miejsca</Link>
            </li>
            <li>
                <Link href="#">Mercedes Sprinter 19+2 miejsca</Link>
            </li>
            <li>
                <Link href="#">Mercedes 27+2 miejsca</Link>
            </li>
            <li>
                <Link href="#">Mercedes Tourino 38+2 miejsca</Link>
            </li>
        </List>
        <Window />
    </Container>
);

export default Flota;