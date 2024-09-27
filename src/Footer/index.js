import { Bottom, HeaderContainer, Fb, Wrapper, Header, Link, Img, Icon, List, Item, Segment, Contact, Cookies } from "./styled";
import fbLogo from "./images/fbLogo.png";
import phoneIcon from "./images/phone.png";
import mailIcon from "./images/mail.png";
import Container from "../Container";


const Footer = () => (
    <Bottom id="Kontakt">
        <Container>
            <Wrapper>
                <Segment>
                    <HeaderContainer>
                        <Icon src={mailIcon} alt="ikona maila" />
                        <Header>
                            E-MAIL
                        </Header>
                    </HeaderContainer>
                    <List>
                        <Item><Link href="mailto:biuro@kurierjankowski.pl">biuro@kurierjankowski.pl</Link></Item>
                        <Item><Link href="mailto:transport@kurierjankowski.pl">transport@kurierjankowski.pl</Link></Item>
                    </List>
                </Segment>
                <Segment>
                    <HeaderContainer>
                        <Icon src={phoneIcon} alt="ikona telefonu" />
                        <Header>
                            TELEFON
                        </Header>
                    </HeaderContainer>
                    <List>
                        <Item><Link href="tel:+48857162191">+48 857 162 191</Link></Item>
                        <Item><Link href="tel:+48515073556">+48 515 073 556</Link></Item>
                        <Item><Link href="tel:+48506110936">+48 506 110 936</Link></Item>
                    </List>
                </Segment>
                <Fb><a href="https://www.facebook.com/kurierjankowscy"><Img src={fbLogo} alt="Logo Facebook" /></a></Fb>
            </Wrapper>
            <Contact>
                <Cookies>
                    <Link href="/PolitykaCookies.pdf">Politka Cookies</Link>
                </Cookies>
            </Contact>
        </Container>
    </Bottom>
)

export default Footer;