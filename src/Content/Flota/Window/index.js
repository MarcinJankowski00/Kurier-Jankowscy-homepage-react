import React, { useState, useEffect } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { data } from '../data';
import { Container, Photo, Info, Item, Content, Title } from "./styled";

const Window = ({ info, isopen }) => {

    const [vehicleObject, setVehicleObject] = useState(null);
    useEffect(() => {
        const newVehicleObject = data.find((vehicle) => vehicle.id === info);
        setVehicleObject(newVehicleObject);
    }, [info]);

    if (!vehicleObject) {
        // Jeśli obiekt pojazdu nie został jeszcze załadowany, możesz wyświetlić odpowiednią treść lub loader
        return <div>Loading...</div>;
    }

    return (
        <Container isopen={isopen.isWindowOpen}>
            <Photo>
                <ImageGallery items={vehicleObject.images} />
                <Title>{vehicleObject.name}</Title>
            </Photo>
            <Info>
                {vehicleObject.content.map(item => (
                    <Item>
                        <Content>
                            {item}
                        </Content>
                    </Item >
                ))}
            </Info>
        </Container>
    );
};

export default Window;