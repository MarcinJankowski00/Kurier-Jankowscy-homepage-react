import { Content, Image, Container, Div } from "./styled";
import info from "./info.png"

const Aktualnosci = () => (
    <Content>
        <Container>
            <Div>
                DRODZY PASAŻEROWIE
            </Div><br />
            Informujemy, że w dniu 16.10.2023 r. (poniedziałek) została zmieniona lokalizacja przystanku znajdującego
            się przy Dworcu PKS. Miejsce postojowe zostało przeniesione na stałe, w miejsce
            oznaczone na załączonym planie sytuacyjnym.
        </Container>
        <Image src={info} />
    </Content>
);

export default Aktualnosci;