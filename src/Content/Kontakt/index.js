import { Wrapper, Container, InfoWrapper, Header, Link, Icon, List, Item, Segment, ImageWrapper, Image } from "./styled";
import localizationIcon from "./images/localization.png";
import phoneIcon from "./images/phone.png";
import mailIcon from "./images/mail.png";
import clockIcon from "./images/clock.png";
import office from "./images/office.jpg"
import { DecorativeShape } from "../../decorativeShape";

const Kontakt = () => (
    <Wrapper>
        <InfoWrapper>
            <Segment>
                <Container>
                    <Icon src={localizationIcon} alt="ikona lokalizacji" />
                    <Header>
                        ADRES
                    </Header>
                </Container>
                <List>
                    <Item>19-100 Mońki</Item>
                    <Item>ul. Dworcowa 6</Item>
                </List>
            </Segment>
            <Segment>
                <Container>
                    <Icon src={clockIcon} alt="ikona zagara" />
                    <Header>
                        GODZINY PRACY
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
                    <Icon src={mailIcon} alt="ikona maila" />
                    <Header>
                        E-MAIL
                    </Header>
                </Container>
                <List>
                    <Item><Link href="mailto:biuro@kurierjankowski.pl">biuro@kurierjankowski.pl</Link></Item>
                    <Item><Link href="mailto:transport@kurierjankowski.pl">transport@kurierjankowski.pl</Link></Item>
                </List>
            </Segment>
            <Segment>
                <Container>
                    <Icon src={phoneIcon} alt="ikona telefonu" />
                    <Header>
                        TELEFON
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