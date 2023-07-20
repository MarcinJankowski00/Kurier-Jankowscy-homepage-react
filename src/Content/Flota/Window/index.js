import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { information, images } from './data';
import { Container, Photo, Info, Item, Content, Title } from "./styled";

const Window = (adress) => {
    const id = adress;
    const convertToNumber = +id.adress;
    const info = information[convertToNumber];
    const photos = images[convertToNumber];

    return (
        <Container>
            <Photo>
                <ImageGallery items={photos} />
                <Title>{info[0].name}</Title>
            </Photo>
            <Info>
                {info.map(inf => (
                    <Item key={inf.id}>
                        <Content>
                            {inf.content}
                        </Content>
                    </Item >
                ))}
            </Info>
        </Container>
    );
};

export default Window;