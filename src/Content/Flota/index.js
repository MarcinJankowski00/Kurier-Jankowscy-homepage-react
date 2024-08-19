import { Container, Content, Photo, Info, Title, Bottom, More, } from "./styled";
import { data } from './data';
import { toVechicle } from "../../routes";

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
                    <Content to={toVechicle({ id: item.id })} onClick={scrollToTop}>
                        <Photo src={item.images[0].original} />
                        <Info>
                            <Title>
                                {item.name}
                            </Title>
                            <Bottom>
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