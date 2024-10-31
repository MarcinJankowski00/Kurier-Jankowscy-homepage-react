import {
    Wrapper,
    Container,
    InfoWrapper,
    Header,
    Link,
    StyledLocalizationIcon,
    StyledClockIcon,
    StyledMailIcon,
    StyledPhoneIcon,
    List,
    Item,
    Segment,
    ImageWrapper,
    Image
} from "./styled";
import office from "./images/office.jpg"
import { DecorativeShape } from "../../decorativeShape";

const Kontakt = () => (
    <Wrapper>
        <InfoWrapper>
            <Segment>
                <Container>
                    <StyledLocalizationIcon />
                    <Header>
                        Adres
                    </Header>
                </Container>
                <List>
                    <Item>19-100 Mońki</Item>
                    <Item>ul. Dworcowa 6</Item>
                </List>
            </Segment>
            <Segment>
                <Container>
                    <StyledClockIcon />
                    <Header>
                        Godziny pracy
                    </Header>
                </Container>
                <List>
                    <Item><span>Poniedziałek:</span><span>8:00 - 16:00</span></Item>
                    <Item><span>Wtorek:</span><span>8:00 - 16:00</span></Item>
                    <Item><span>Środa:</span><span>8:00 - 16:00</span></Item>
                    <Item><span>Czwartek:</span><span>8:00 - 16:00</span></Item>
                    <Item><span>Piątek:</span><span>8:00 - 16:00</span></Item>
                </List>
            </Segment>
            <Segment>
                <Container>
                    <StyledMailIcon />
                    <Header>
                        E-mail
                    </Header>
                </Container>
                <List>
                    <Item><Link href="mailto:biuro@kurierjankowski.pl">biuro@kurierjankowski.pl</Link></Item>
                    <Item><Link href="mailto:transport@kurierjankowski.pl">transport@kurierjankowski.pl</Link></Item>
                </List>
            </Segment>
            <Segment>
                <Container>
                    <StyledPhoneIcon />
                    <Header>
                        Telefon
                    </Header>
                </Container>
                <List>
                    <Item>tel: <Link href="tel:+48857162191">+48 857 162 191</Link></Item>
                    <Item>kom. <Link href="tel:+48515073556">+48 515 073 556</Link></Item>
                    <Item>kom. <Link href="tel:+48506110936">+48 506 110 936</Link></Item>
                </List>
            </Segment>
            <br />
            <br />
            NIP: 546-12-60-799<br />
        </InfoWrapper>
        <div>
            <ImageWrapper>
                <Image src={office} alt="biuro" />
                <DecorativeShape />
                <DecorativeShape left="true" />
            </ImageWrapper>
        </div>
    </Wrapper>
)

export default Kontakt;