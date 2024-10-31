import { Bottom, CallToAction, HeaderContainer, Wrapper, Header, Link, StyledMailIcon, StyledPhoneIcon, List, Item, Segment, Contact, SocialLink, Cookies } from "./styled";
import { ReactComponent as FbIcon } from "./icons/fbIcon.svg"
import { ReactComponent as IgIcon } from "./icons/igIcon.svg"
import { ReactComponent as TtIcon } from "./icons/ttIcon.svg"
import Container from "../Container";


const Footer = () => (
    <Bottom id="Kontakt">

        <Container>
        <CallToAction>
                Zadzwoń lub wyślij zapytanie
        </CallToAction>
            <Wrapper>
                <Segment>
                    <HeaderContainer>
                    <StyledMailIcon />
                        <Header>
                            E-mail
                        </Header>
                    </HeaderContainer>
                    <List>
                        <Item><Link href="mailto:biuro@kurierjankowski.pl">biuro@kurierjankowski.pl</Link></Item>
                        <Item><Link href="mailto:transport@kurierjankowski.pl">transport@kurierjankowski.pl</Link></Item>
                    </List>
                </Segment>
                <Segment>
                    <HeaderContainer>
                    <StyledPhoneIcon />
                        <Header>
                            Telefon
                        </Header>
                    </HeaderContainer>
                    <List>
                        <Item><Link href="tel:+48857162191">+48 857 162 191</Link></Item>
                        <Item><Link href="tel:+48515073556">+48 515 073 556</Link></Item>
                        <Item><Link href="tel:+48506110936">+48 506 110 936</Link></Item>
                    </List>
                </Segment>
                <div>
                    <SocialLink href="https://www.facebook.com/kurierjankowscy" target="_blank" rel="noopener noreferrer">
                        <FbIcon />
                    </SocialLink>
                    <SocialLink href="https://www.instagram.com/kurierjankowski/" target="_blank" rel="noopener noreferrer">
                        <IgIcon />
                    </SocialLink>
                    <SocialLink href="https://www.tiktok.com/@kurierjankowski?_t=8qtlIIcgY34&_r=1&fbclid=IwZXh0bgNhZW0CMTAAAR1v_Mso5uC5pMxpnZS4ss58WQtCDfhHHRvw8dck0ZkqAdtnLR8C6B-PjjU_aem_3mnnYHD6syRbuR6JoE0I6A" target="_blank" rel="noopener noreferrer">
                        <TtIcon />
                    </SocialLink>
                </div>
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