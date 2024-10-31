import { Content, Photo, Info, Title, Bottom, More, StyledPersonIcon } from "./styled";
import { toVechicle } from "../../routes";

const ContentItem = ({ item }) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <Content to={toVechicle({ id: item.id })} onClick={scrollToTop}>
            <Photo
                src={item.images[0].original}
                alt={item.name}
            />
            <Info>
                <Title>
                    {item.name}
                </Title>
                <Bottom>
                    <div>
                        <StyledPersonIcon />
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