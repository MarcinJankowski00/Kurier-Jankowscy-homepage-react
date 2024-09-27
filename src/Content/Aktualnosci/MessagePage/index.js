import Section from "../../../Section";
import { news } from "../News";
import { Content, Container, Div, Date, Photo, Link } from "./styled";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const MessagePage = () => {
    const { id } = useParams();
    const informationObject = news.find((information) => information.id === id);

    if (id === 'przypomnienie-bilety')
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
                                    📚Przypominamy, że legitymacje szkolne tracą ważność 30 września. Zachęcamy do przedłużenia ważności dokumentów.<br />
                                    <br />
                                    🍂Zapraszamy również do zakupu biletów na trasie Białystok - Mońki na miesiąc październik.<br />
                                    <br />
                                    🗓 Specjalnie dla Was otwieramy Biuro Turystyczne w Mońkach, ul. Dworcowa 6, w dniu 28 września (sobota). Biuro będzie czynne w godzinach 8:00 - 12:00.
                                </Container>
                            </Content>
                        </>
                    }
                />
            </>
        );
    if (id === 'wyjazd-na-litwe')
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
                                    <b>Zapraszamy na wycieczkę Kowno – Kiedany – Szydłowo – Szawle – Wilno</b>

                                    <p>🗓 Termin: 17-19.09.2024 rok</p>
                                    <p>🚌 Czas trwania: 3 dni</p>

                                    <b>I dzień (17.09.2024 r.):</b>
                                    <ul>
                                        <li>Wyjazd w godzinach rannych.</li>
                                        <li>Przejazd do Kowna – zwiedzanie miasta, m.in.: ruiny zamku, Starówka, Bazylika Św. Pawła i Piotra, Ratusz zwany „Białym Łabędziem”, Dom Perkuna, spacer Aleją Wolności, kościół Św. Michała Archanioła.</li>
                                        <li>Czas wolny.</li>
                                        <li>Obiadokolacja.</li>
                                        <li>Zakwaterowanie i nocleg w hotelu w Kownie – pokoje 2, 3 os. z łazienkami.</li>
                                    </ul>

                                    <b>II dzień (18.09.2024 r.):</b>
                                    <ul>
                                        <li>Śniadanie, wykwaterowanie z hotelu.</li>
                                        <li>Wyjazd do Kiejdan i przejazd do Kiejdan – zwiedzanie m.in. starego miasta, cmentarza żydowskiego w lesie, kościoła Św. Józefa, kościoła ewangelicko-reformowanego, barokowego klasztoru i bazyliki Św. Mikołaja z mauzoleum książąt Radziwiłłów.</li>
                                        <li>Przejazd do Szawli – zwiedzanie miasta, gdzie znajduje się góra usypana dla Najświętszej Maryi Panny.</li>
                                        <li>Przejazd do Wilna, zakwaterowanie w hotelu – pokoje 2, 3 os. z łazienkami.</li>
                                        <li>Obiadokolacja, nocleg.</li>
                                    </ul>

                                    <b>III dzień (19.09.2024 r.):</b>
                                    <ul>
                                        <li>Śniadanie, wykwaterowanie z hotelu.</li>
                                        <li>Msza Święta w Ostrej Bramie przed obrazem Najświętszej Maryi Panny.</li>
                                        <li>Spotkanie z przewodnikiem, zwiedzanie m.in.: Cerkiew Św. Trójcy, Rynek i Kościół Św. Jana, Sanktuarium Miłosierdzia Bożego, Kościół Św. Ducha, Kościół Św. Anny, pomnik Adama Mickiewicza, Kościół Św. Piotra i Pawła, cmentarz na Rossie.</li>
                                        <li>Powrót do godziny wieczornych.</li>
                                    </ul>

                                    <div>
                                        <p>💰 Cena: 790 zł/osoba + 10 EUR bilety wstępu w Kiejdanach</p>
                                        <p>Cena zawiera:</p>
                                        <ul>
                                            <li>Transport autokarem 🚌</li>
                                            <li>Opłaty drogowe i parkingi</li>
                                            <li>Ubezpieczenie kraj i zagranica</li>
                                            <li>Usługi przewodników: Kowno, Kiejdany, Wilno</li>
                                            <li>2 obiadokolacje 🍽️</li>
                                            <li>2 noclegi 🛌</li>
                                            <li>2 śniadania ☕️</li>
                                        </ul>
                                        <p>📌 Uwaga: Kolejność zwiedzania może ulec zmianie.</p>
                                    </div>

                                    <div>
                                        <b>📞 Kontakt i rezerwacje:</b>
                                        <p>Tel: <Link href="tel:+48857162191">+48 857 162 191</Link></p>
                                        <p>Email: <Link href="mailto:biuro@kurierjankowski.pl">biuro@kurierjankowski.pl</Link></p>
                                    </div>
                                </Container>
                            </Content>
                        </>
                    }
                />
            </>
        );
    if (id === 'przypomnienie-nowy-rok-szkolny')
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
                                    🏫 Przypominamy dzieciom, młodzieży i ich rodzicom, że nowy rok szkolny rozpoczyna się już 2 września! To idealny moment, aby zadbać o zakup biletów miesięcznych!<br />
                                    <br />
                                    🚍 Serdecznie zapraszamy do naszego biura przy ulicy Dworcowej 6 w Mońkach od poniedziałku do piątku w godzinach 8:00-16:00.<br />
                                    <br />
                                    📖 Życzymy Wam radosnego powrotu do szkoły oraz wielu inspirujących doświadczeń w nowym roku szkolnym!
                                </Container>
                            </Content>
                        </>
                    }
                />
            </>
        );

    if (id === 'zmiana-rozkładu-w-dniu-16-08-2024')
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
    if (id === 'zmiana-rozkładu-w-dniu-02-05-2024')
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
    if (id === 'wyjazd-do-wilna-na-jarmark-kaziukowy')
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
};

export default MessagePage;