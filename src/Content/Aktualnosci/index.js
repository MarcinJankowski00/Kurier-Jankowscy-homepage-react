import { Content, Image, Container, Div, Red } from "./styled";
import info from "./info.png"

const Aktualnosci = () => (
    <Content>
        <Container>
            <Div>
                <Red>UWAGA NOWA LOKALIZACJA PRZYSTANKU!</Red><br />
                <br />
                DRODZY PASAŻEROWIE
            </Div><br />
            Informujemy, że w dniu 16.10.2023 r. (poniedziałek) została zmieniona lokalizacja przystanku znajdującego
            się przy Dworzecu PKS. Miejsce postojowe zostało przeniesione na stałe, w miejsce
            oznaczone na załączonym planie sytuacyjnym.
        </Container>
        <Image src={info} />
    </Content>
);

export default Aktualnosci;