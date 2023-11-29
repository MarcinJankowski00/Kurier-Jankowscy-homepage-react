import { Bottom, Adres, Kontakt, Fb, Wrapper, Contact, Link, Img, Cookies } from "./styled";
import fbLogo from "./fbLogo.png";

const Footer = () => (
    <Bottom id="Kontakt">
        <Wrapper>
            <Fb><a href="https://www.facebook.com/kurierjankowscy"><Img src={fbLogo} alt="Facebook"/></a></Fb>
            <Contact>
                <Adres>
                    ADRES<br />
                    KURIER S.C JANKOWSCY<br />
                    ul. Dworcowa 6<br />
                    19-100 Mońki<br />
                    NIP: 546-12-60-799<br />
                </Adres>
                <Kontakt>
                    KONTAKT<br />
                    <Link href="mailto:biuro@kurierjankowski.pl">biuro@kurierjankowski.pl</Link><br />
                    <Link href="mailto:transport@kurierjankowski.pl">transport@kurierjankowski.pl</Link><br />
                    Telefon: <Link href="tel:+48857162191">85 716 21 91</Link><br /> 
                    kom. <Link href="tel:+48515073556">515 073 556</Link><br />
                    kom. <Link href="tel:+48506110936">506 110 936</Link><br />
                </Kontakt>
                <Cookies>
                    INFORMACJE:<br />
                    <Link href="/PolitykaCookies.pdf">Politka dotycząca Plików Cookies</Link>
                </Cookies>
            </Contact>
        </Wrapper>
    </Bottom>
)

export default Footer;