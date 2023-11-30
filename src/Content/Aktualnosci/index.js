import { Content, Container, Div } from "./styled";
import FileDownloadButton from './FileDownloadButton';
import rozkladJazdy from './Nowy_Rozkład_Jazdy.pdf';

const Aktualnosci = () => (
    <Content>
        <Container>
            <Div>
                DRODZY PASAŻEROWIE
            </Div><br />
            Informujemy, iż dnia <b>01.12.2023</b><br />
            zmienił się rozkład jazdy na linii<br />
            <b>Mońki – Białystok</b>.<br />
            Nowe rozkłady dostępne u kierowców,<br />
            w biurze mieszczącym się w Mońkach przy ul. Dworcowej 6 <br />
            oraz na naszym Facebooku i stronie internetowej.
        </Container>
        <FileDownloadButton
            filename="Nowy_Rozkład_Jazdy.pdf"
            src={rozkladJazdy}
        />
    </Content>
);

export default Aktualnosci;