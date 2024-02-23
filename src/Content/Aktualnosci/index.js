import { Content, Container, Div, Img } from "./styled";
import wilno from './wilno.jpg';

const Aktualnosci = () => (
    <Content>
        <Img src={wilno} /> 
        <Container>
            W programie:
            <ul>
            <li>Wyjazd o godz. 5:00, przejazd do Wilna</li>

            <li>Zwiedzanie: Ostra Brama i Kaplica Ostrobramska  cudownym obrazem, Cerkiew Św. Trójcy, Kościół Św. Piotra i Pawła, cmentarz na Rossie</li>

            <li>Pobyt na Kaziukowym Jarmarku – czas wolny 2 godz.</li>

            <li>Przejazd do Trok – zwiedzanie Zamku Książąt Litewskich (z zewnątrz), spacer dzielnicą karaimską. Możliwość zamówienia tradycyjnego obiadu karaimskiego (za dodatkową opłatą).</li>

            <li>Wyjazd z Trok w drogę powrotną</li>

            <li>Powrót ok. godz. 21:30 – 22:00</li>
            </ul>
            Kolejność zwiedzania może ulec zmianie.<br />
            <br />
            Cena: <b>195 zł. za osobę</b><br />
            <br />
            Cena zawiera:
            <ul>
            <li>transport autokarem</li>
            <li>ubezpieczenie kraj i zagranica</li>
            <li>usługa pilota i przewodnika</li>
            </ul>
            Orientacyjna cena za obiad w Trokach 10 € (2 kibiny i rosół).<br />
            <br />
            <Div>Zapisy pod numerem telefonu 515 073 556 oraz w Biurze przy ul. Dworcowej 6 w Mońkach do dnia 29.02.2024 r.</Div>
        </Container>
    </Content>
);

export default Aktualnosci;