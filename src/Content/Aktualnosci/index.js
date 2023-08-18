import { Content, Image, Container, Div } from "./styled";
import info from "./info.jpg"

const Aktualnosci = () => (
    <Content>
        <Container>
        <Div>DRODZY PASAŻEROWIE</Div><br />
        Informujemy, że w dniu 18.08.2023 r. (piątek) została zmieniona lokalizacja przystanku znajdującego
        się przy Dworzecu PKS w związku z trwającą budową. Miejsce postojowe zostało przeniesione w miejsce
        oznaczone na załączonym planie sytuacyjnym.
        </Container>
        <Image src={info} />
    </Content>
);

export default Aktualnosci;