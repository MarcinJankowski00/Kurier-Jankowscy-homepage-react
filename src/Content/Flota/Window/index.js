import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { data } from '../data';
import { Container, Photo, Info, Item, Content, Title } from "./styled";

const Window = (adress) => {
    const vehicleObject = data.find((vehicle) => vehicle.id === adress.info);

    return (
        <Container>
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