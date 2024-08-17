import { Bottom, Container, Fb, Wrapper, Header, Link, Img, Icon } from "./styled";
import localizationIcon from "./images/localization.png";
import phoneIcon from "./images/phone.png";
import mailIcon from "./images/mail.png";

const Kontakt = () => (
    <Bottom id="Kontakt">
        <Wrapper>
            <Container>
                <Icon src={localizationIcon} />
                <Header>
                    ADRES<br />
                </Header>
            </Container>
            19-100 Mońki<br />
            ul. Dworcowa 6<br />
            <Container>
                <Icon src={mailIcon} />
                <Header>
                    E-MAIL
                </Header>
            </Container>
            <Link href="mailto:biuro@kurierjankowski.pl">biuro@kurierjankowski.pl</Link><br />
            <Link href="mailto:transport@kurierjankowski.pl">transport@kurierjankowski.pl</Link><br />
            <Container>
                <Icon src={phoneIcon} />
                <Header>
                    TELEFON
                </Header>
            </Container>
            Biuro: <Link href="tel:+48857162191">+48 857 162 191</Link><br />
            kom. <Link href="tel:+48515073556">+48 515 073 556</Link><br />
            kom. <Link href="tel:+48506110936">+48 506 110 936</Link><br />
            <br />
            NIP: 546-12-60-799<br />
        </Wrapper>
    </Bottom>
)

export default Kontakt;