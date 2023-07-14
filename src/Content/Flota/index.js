import { useState } from "react";
import { Container, List, Button, } from "./styled";
import Window from './Window';

const Flota = () => {
    const [adress, setAdress] = useState(0);

    return (
        <Container>
            <List>
                <li>
                    <Button
                        onClick={() => setAdress(0)}
                    >
                        Volkswagen Caravelle
                    </Button>
                </li>
                <li>
                    <Button
                        onClick={() => setAdress(1)}
                    >
                        Opel Vivaro
                    </Button>
                </li>
                <li>
                    <Button
                        onClick={() => setAdress(2)}
                    >
                        Mercedes Sprinter
                    </Button>
                </li>
                <li>
                    <Button
                        onClick={() => setAdress(3)}
                    >
                        Mercedes Tourino
                    </Button>
                </li>
                <li>
                    <Button
                        onClick={() => setAdress(4)}
                    >
                        Man Lions Coach
                    </Button>
                </li>
                <li>
                    <Button
                        onClick={() => setAdress(5)}
                    >
                        Man
                    </Button>
                </li>
            </List>
            <Window adress={adress} />
        </Container>

    );
}

export default Flota;