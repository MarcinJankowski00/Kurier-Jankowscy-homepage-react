import { useState } from "react";
import { Container, List, Button, } from "./styled";
import Window from './Window';

const Flota = () => {
    const [adress, setAdress] = useState(0);

    return (
        <Container>
            <List>

                <Button
                    onClick={() => setAdress(0)}
                >
                    Volkswagen Caravelle
                </Button>


                <Button
                    onClick={() => setAdress(1)}
                >
                    Opel Vivaro
                </Button>


                <Button
                    onClick={() => setAdress(2)}
                >
                    Mercedes Sprinter
                </Button>


                <Button
                    onClick={() => setAdress(3)}
                >
                    Mercedes Tourino
                </Button>


                <Button
                    onClick={() => setAdress(4)}
                >
                    Man Lions Coach
                </Button>


                <Button
                    onClick={() => setAdress(5)}
                >
                    Man
                </Button>

            </List>
            <Window adress={adress} />
        </Container>

    );
}

export default Flota;