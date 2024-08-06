import { useState } from "react";
import { Container, Div, Button } from "./styled";
import { data } from './data';
import Window from './Window';

const Flota = () => {
    const [adress, setAdress] = useState(8);
    const [isWindowOpen, setWindowOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    
    const closeWindow = () => {
        setWindowOpen(false);
    };

    const toggleWindow = (vehicle) => {
        closeWindow();
        setIsLoading(true);
        setAdress(vehicle.id); 
    } 

    return (
        <Container>
            <Div>
                {data.map((vehicle) => (
                    <Button
                        key={vehicle.id}
                        value={vehicle.name}
                        onClick={vehicle.id!==adress ? () => toggleWindow(vehicle) : null}
                    >
                        {vehicle.name}
                    </Button>
                ))}
            </Div>
            <Window info={adress} isopen={isWindowOpen} isLoading={isLoading} setIsLoading={setIsLoading}/>
        </Container>
    );
}

export default Flota;