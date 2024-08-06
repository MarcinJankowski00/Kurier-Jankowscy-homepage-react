import React, { useState, useEffect } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { data } from '../data';
import { Container, Photo, Info, Item, Content, Title, LoaderWrapper } from "./styled";
import { ClipLoader } from 'react-spinners';

const Window = ({ info, isWindowOpen, isLoading, setIsLoading }) => {

    const [vehicleObject, setVehicleObject] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const newVehicleObject = data.find((vehicle) => vehicle.id === info);
            if (newVehicleObject) {
                await loadImage(newVehicleObject.images);
                setVehicleObject(newVehicleObject);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [info, setIsLoading]);

    const loadImage = (images) => {
        return Promise.all(images.map(image => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = image.original;
                img.onload = resolve;
            });
        }));
    };

    if (isLoading || !vehicleObject) {
        return (
            <LoaderWrapper>
                <ClipLoader size={75} color='alto' />
            </LoaderWrapper>
        );
    }

    return (
        <Container isopen={isWindowOpen}>
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