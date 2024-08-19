
import { Segment, Header, Title, Content, Container } from "./styled";

const Section = ({ title, content }) => (
    <Container>
        <Segment>
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