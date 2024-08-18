import { Bottom, Container, Fb, Wrapper, Header, Link, Img, Icon, List, Item, Segment } from "./styled";
import localizationIcon from "./images/localization.png";
import phoneIcon from "./images/phone.png";
import mailIcon from "./images/mail.png";
import clockIcon from "./images/clock.png";

const Kontakt = () => (
    <Bottom id="Kontakt">
        <Wrapper>
            <Segment>
                <Container>
                    <Icon src={localizationIcon} />
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
                    <Icon src={clockIcon} />
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
                    <Icon src={mailIcon} />
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
                    <Icon src={phoneIcon} />
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
        </Wrapper>
    </Bottom>
)

export default Kontakt;