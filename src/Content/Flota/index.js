import { Container, Content, Photo, Info, Title, Bottom, More, Icon } from "./styled";
import { data } from './data';
import { toVechicle } from "../../routes";
import personIcon from "./personIcon.png";

const Flota = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <Container>
            {data.map((item) => {
                return (
                    <Content 
                    key={item.id}
                    to={toVechicle({ id: item.id })} 
                    onClick={scrollToTop}
                    >
                        <Photo src={item.images[0].original} />
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
            })}
        </Container>
    );
}

export default Flota;