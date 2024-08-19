import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { data } from '../data';
import { Wrapper, Photo, Info, Item, Content } from "./styled";
import Container from '../../../Container';
import Section from '../../../Section';


const VechiclePage = () => {
    const { id } = useParams();
    const vehicleObject = data.find((information) => information.id === id);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (vehicleObject) {
                await loadImage(vehicleObject.images);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [vehicleObject, setIsLoading]);


    const loadImage = (images) => {
        return Promise.all(images.map(image => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = image.original;
                img.onload = resolve;
            });
        }));
    };

    if (!vehicleObject) {
        return 0;
    };

    const renderContent = () => {
        return (
            <Container>
                <Wrapper>
                    <Photo>
                        <ImageGallery items={vehicleObject.images} />
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
                </Wrapper>
            </Container>
        );
    };

    return (
        <Section
            title={vehicleObject.name}
            content={renderContent()}
        />
    );
};

export default VechiclePage;