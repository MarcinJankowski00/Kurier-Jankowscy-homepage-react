import { toMessage } from "../../routes";
import { news } from "./News";
import { Container, Content, Photo, Info, Title, FirstSentence, Bottom, More, Date } from "./styled";

const Aktualnosci = () => (
    <Container>
        {news.map((item)=> {
            return (
                <Content to={toMessage({ id: item.id })}>
                    <Photo src={item.photo} />
                    <Info>
                        <Title>
                            {item.title}
                        </Title>
                        <FirstSentence>
                            {item.firstSentence}
                        </FirstSentence>
                        <Bottom>
                            <More>
                                więcej
                            </More>
                            <Date>
                                {item.date}
                            </Date>
                        </Bottom>
                    </Info>
                </Content>
            );
        })}
    </Container>
);

export default Aktualnosci;