import { Content, Container, Segment, Wrapper, ImageWrapper, Image, Button } from "./styled";
import { DecorativeShape } from "../../decorativeShape";
import vehicles from "./images/vehicles.jpg"
import bus from "./images/bus.jpg"
import { toFleat } from "../../routes";
import scrollToTop from "../../scrollToTop";

const Oferta = () => (
    <Container>
        <Content>
            <div>
                Oferujemy Państwu wynajem komfortowych autokarów i busów. Oferta
                skierowana jest do firm, grup zorganizowanych oraz osób
                indywidualnych. Nasza flota to nowoczesne busy i autokary
                wyposażone we wszelkie udogodnienia dla pasażerów (klimatyzacja,
                DVD, mikrofon, cafe bar, komfortowe fotele rozsuwane i odchylane).
                Naszych kierowców charakteryzuje duża wiedza ogólna, dyskrecja,
                gotowość do udzielenia pomocy oraz wysoka kultura osobista.
                Nowoczesność naszej floty oraz profesjonalizm naszych kierowców
                sprawi że podróż będzie przyjemnością.
            </div>
            <Segment>
                <Wrapper>
                    <h2>Dla osób indywidualnych, grup zorganizowanych oraz firm:</h2>
                    <ul>
                        <li>Przewozy wycieczkowe</li>
                        <li>Przejazdy na uroczystości oraz spotkania rodzinne</li>
                        <li>Przejazdy pielgrzymkowe</li>
                        <li>Wyjazdy firmowe na szkolenia i imprezy integracyjne</li>
                        <li>Oferta obejmuje przewozy krajowe oraz zagraniczne</li>
                    </ul>
                </Wrapper>
                <ImageWrapper>
                    <Image src={vehicles} alt="autobusy"/>
                    <DecorativeShape  />
                    <DecorativeShape left="true" />
                </ImageWrapper>
            </Segment>
            <Segment>
                <ImageWrapper>
                    <Image src={bus} alt="autobus"/>
                    <DecorativeShape />
                    <DecorativeShape />
                </ImageWrapper>
                <Wrapper>
                    <h2>Inne usługi turystyczne:</h2>
                    <ul>
                        <li>Bilety lotnicze: LOT, KLM, Swiss itd.</li>
                        <li>Tanie linie lotnicze: Wizzair, Norwegian itd.</li>
                        <li>Bilety autokarowe: Eurolines Polska, Sindbad itd.</li>
                        <li>Bilety promowe: Polferries, Stena Lines itd.</li>
                        <li>Wczasy, wycieczki, kolonie i obozy dla dzieci i młodzieży</li>
                        <li>Przygotowanie i obsługę wycieczek oraz imprez integracyjnych</li>
                        <li>Pośrednictwo wizowe</li>
                        <li>Ubezpieczenia AXA</li>
                    </ul>
                </Wrapper>
            </Segment>
            <Button to={toFleat} onClick={scrollToTop}>
                 Sprawdź naszą flotę
            </Button>
        </Content>
    </Container>
);

export default Oferta;