import { useState } from "react";
import { Container, Div, Button, } from "./styled";
import { data } from './data';
import Window from './Window';

const Flota = () => {
    const [adress, setAdress] = useState(5);

    return (
        <Container>
            <Div>
                {data.map((vehicle) => (
                    <Button
                        key={vehicle.id}
                        value={vehicle.name}
                        onClick={() => setAdress(vehicle.id)}
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