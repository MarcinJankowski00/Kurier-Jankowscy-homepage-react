import { useState } from "react";
import { Container, Div, Button } from "./styled";
import { data } from './data';
import Window from './Window';

const Flota = () => {
    const [adress, setAdress] = useState(8);
    const [isWindowOpen, setWindowOpen] = useState("true");
    const openWindow = () => {
        setWindowOpen("true");
    };
    const closeWindow = () => {
        setWindowOpen("false");
    };

    const toggleWindow = (vehicle) => {
        closeWindow();
        setAdress(vehicle.id); 
        const timer2 = setTimeout(() => {
            openWindow();
        }, 1);
    
        return () => {
          clearTimeout(timer2);
        };
    } 

    return (
        <Container>
            <Div>
                {data.map((vehicle) => (
                    <Button
                        key={vehicle.id}
                        value={vehicle.name}
                        onClick={() => toggleWindow(vehicle)}
                    >
                        {vehicle.name}
                    </Button>
                ))}
            </Div>
            <Window info={adress} isopen={{isWindowOpen}}/>
        </Container>
    );
}

export default Flota;