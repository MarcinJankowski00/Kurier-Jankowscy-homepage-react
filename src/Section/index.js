
import { Segment, Header, Title, Content, Container } from "./styled";

const Section = ({ title, content, adress }) => (
    <Container>
        <Segment id={adress}>
            <Header>
                <Title>
                    {title}
                </Title>
            </Header>
            <Content>
                {content}
            </Content>
        </Segment>
    </Container>
)

export default Section;