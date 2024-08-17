import Section from "../../../Section";
import { toStart } from '../../../routes';
import { news } from "../News";
import { Content, Container, Div, Date, Photo, ReturnButton } from "./styled";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const MessagePage = () => {
    const { id } = useParams();
    const informationObject = news.find((information) => information.id == id);

    if (id == 1)
        return (
            <>
                <Section
                    title={informationObject.title}
                    content={
                        <>
                            <Date>{informationObject.date}</Date>
                            <Content>
                                <Photo src={informationObject.photo} />
                                <Container>
                                    <Div>DRODZY PASAŻEROWIE</Div><br />
                                    Informujemy, że <b>dnia 16.08.2024 (piątek)</b>, autobusy na linii <b>Mońki – Białystok</b> będą kursowały wg <b>rozkładu sobotniego</b>. Wyszukiwarka połączeń została zaktualizowana, o tę zmianę.<br />
                                    <br />
                                </Container>
                            </Content>
                        </>
                    }
                />
            </>
        );
    if (id == 2)
        return (
            <>
                <Section
                    title={informationObject.title}
                    content={
                        <>
                            <Date>{informationObject.date}</Date>
                            <Content>
                                <Photo src={informationObject.photo} />
                                <Container>
                                    <Div>DRODZY PASAŻEROWIE</Div><br />
                                    Informujemy, że <b>dnia 02.05.2024 (czwartek)</b>, autobusy na linii <b>Mońki – Białystok</b>
                                    będą kursowały wg. <b>rozkładu sobotniego</b>. Wyszukiwarka połączeń została zaktualizowana, o tę zmianę.<br />
                                    <br />
                                    Pozdrawiamy i życzymy udanej majówki🌼
                                </Container>
                            </Content>
                        </>
                    }
                />
            </>
        );
    if (id == 3)
        return (
            <>
                <Section
                    title={informationObject.title}
                    content={
                        <>
                            <Date>{informationObject.date}</Date>
                            <Content>
                                <Photo src={informationObject.photo} />
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
                        </>
                    }
                />
            </>
        );
    if (id == 4)
        return (
            <>
                <Section
                    title={informationObject.title}
                    content={
                        <>
                            <Date>{informationObject.date}</Date>
                            <Content>
                                <Photo src={informationObject.photo} />
                                <Container>
                                    <Div>
                                        DRODZY PASAŻEROWIE
                                    </Div><br />
                                    Informujemy, iż dnia <b>01.12.2023</b> zmienił się rozkład jazdy na linii <b>Mońki – Białystok</b>.
                                    Nowe rozkłady dostępne u kierowców, w biurze mieszczącym się w Mońkach przy ul. Dworcowej 6.<br />
                                </Container>
                            </Content>
                        </>
                    }
                />
            </>
        );
};

export default MessagePage;