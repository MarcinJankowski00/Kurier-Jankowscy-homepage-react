import { useState } from 'react';
import { LoaderWrapper, Content, Photo, Info, Title, Bottom, More, Icon } from "./styled";
import { toVechicle } from "../../routes";
import { ClipLoader } from 'react-spinners';
import personIcon from "./personIcon.png";

const ContentItem = ({ item, scrollToTop }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <Content 
            to={toVechicle({ id: item.id })} 
            onClick={scrollToTop}
        >
            {!isImageLoaded && (
                <LoaderWrapper><ClipLoader size={50} color='#1d4368' /></LoaderWrapper>
            )}
            <Photo 
                src={item.images[0].original} 
                style={{ display: isImageLoaded ? 'block' : 'none' }}
                onLoad={handleImageLoad} 
            />
            <Info>
                <Title>
                    {item.name}
                </Title>
                <Bottom>
                    <div>
                        <Icon src={personIcon} />
                        Miejsca: {item.seats}
                    </div>
                    <More>
                        więcej informacji
                    </More>
                </Bottom>
            </Info>
        </Content>
    );
};

export default ContentItem;