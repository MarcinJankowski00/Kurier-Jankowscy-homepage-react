import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { data } from '../data';
import { Wrapper, Photo, Info, Item, Content } from "./styled";
import Section from '../../../Section';


const VechiclePage = () => {
    const { id } = useParams();
    const vehicleObject = data.find((information) => information.id === id);

    if (!vehicleObject) {
        return 0;
    };

    const renderContent = () => {
        return (
            <Wrapper>
                <Photo>
                    <ImageGallery items={vehicleObject.images} />
                </Photo>
                <Info>
                    {vehicleObject.content.map(item => (
                        <Item key={item}>
                            <Content>
                                {item}
                            </Content>
                        </Item >
                    ))}
                </Info>
            </Wrapper>
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