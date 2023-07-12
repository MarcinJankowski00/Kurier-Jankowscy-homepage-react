import { Segment, Header, Title, Content } from "./styled";

const Section = ({ title, content, adress }) => (
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
)

export default Section;