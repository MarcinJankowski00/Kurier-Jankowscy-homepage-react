import { useState } from "react";
import { Container, Div, Button, } from "./styled";
import { data } from './data';
import Window from './Window';

const Flota = () => {
    const [adress, setAdress] = useState('Opel Vivaro');

    return (
        <Container>
            <Div>
                {data.map((vehicle) => (
                    <Button
                        key={vehicle.id}
                        value={vehicle.name}
                        onClick={({ target }) => setAdress(target.value)}
                    >
                        {vehicle.name}
                    </Button>
                ))}
            </Div>
            <Window info={adress} />
        </Container>
    );
}

export default Flota;