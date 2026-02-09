import Section from "../../../Section";
import { news } from "../News";
import { Content, Container, Bigger, Date, Photo, Link } from "./styled";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const MessagePage = () => {
    const { id } = useParams();
    const informationObject = news.find((information) => information.id === id);
    if (id === 'wilno-jarmark-kaziukowy')
        return (
            <>
                <Section
                    title={informationObject.title}
                    content={
                        <>
                            <Date>{informationObject.date}</Date>
                            <Content>
                                <Photo src={informationObject.photo} alt="Plakat ogłoszeniowy" />
                                <Container>
                                    <b>Zapraszamy na wyjątkowy wyjazd do Wilna na Jarmark Kaziukowy</b>
                                    <p>📅 7 marca 2026 r.</p>
                                    <p>
                                        Kaziuki to słynny wileński jarmark organizowany od kilkuset lat z okazji dnia
                                        św. Kazimierza 🌸 W tym czasie starówka Wilna wypełnia się kolorowymi straganami
                                        z rękodziełem ludowym, regionalnymi przysmakami oraz tradycyjnymi palmami
                                        wileńskimi uplecionymi z ziół, suszonych kwiatów i zbóż.
                                    </p>
                                    <b>🚌 Program wyjazdu:</b>
                                    <p>• Wyjazd o godz. <b>5:00</b> (Mońki / Knyszyn / Białystok)</p>
                                    <p>• Przejazd do Wilna</p>
                                    <p>
                                        • Ok. <b>11:00</b> (czas litewski) – krótkie zwiedzanie:
                                    </p>
                                    <p>
                                        – Ostra Brama i Kaplica Ostrobramska<br />
                                        – Kościół Św. Piotra i Pawła<br />
                                        – Cmentarz na Rossie
                                    </p>
                                    <p>• Czas wolny na Jarmarku Kaziukowym</p>
                                    <p>• Przejazd do Trok – krótki spacer</p>
                                    <p>
                                        – możliwość zamówienia tradycyjnego obiadu karaimskiego
                                        (dodatkowo płatne)
                                    </p>
                                    <p>• Wyjazd w drogę powrotną</p>
                                    <p>• Powrót ok. <b>22:00</b></p>
                                    <br />
                                    <div>
                                        <p>💰 <b>Cena</b>: 230 zł / osoba</p>
                                        <p>Cena zawiera:</p>
                                        <ul>
                                            <li>Transport autokarem 🚌</li>
                                            <li>Opłaty drogowe i parkingowe</li>
                                            <li>Ubezpieczenie (kraj + zagranica)</li>
                                            <li>Usługę pilota</li>
                                        </ul>
                                    </div>
                                    <p>
                                        ℹ️ Kolejność zwiedzania może ulec zmianie.<br />
                                        Orientacyjna cena obiadu w Trokach: <b>10 EUR</b>
                                        (2 kibiny + rosół).
                                    </p>
                                    <div>
                                        <b>📞 Zapisy i informacje:</b>
                                        <p>
                                            Tel: <Link href="tel:+48515073556">515 073 556</Link>
                                        </p>
                                        <p>
                                            Biuro: ul. Dworcowa 6, Mońki
                                        </p>
                                    </div>
                                </Container>
                            </Content>
                        </>
                    }
                />
            </>
        );
    if (id === 'nowy-rozklad-jazdy')
        return (
            <>
                <Section
                    title={informationObject.title}
                    content={
                        <>
                            <Date>{informationObject.date}</Date>
                            <Content>
                                <Photo src={informationObject.photo} alt="Plakat ogłoszeniowy" />
                                <Container>
                                    <b>Drodzy Pasażerowie</b>

                                    <p>Informujemy, iż od <b>01.01.2026</b> nieznacznie zmienia się rozkład jazdy na linii <b>Mońki-Białystok</b>.</p>

                                    <p>Nowe rozkłady dostępne u kierowców, w biurze mieszczącym się w Mońkach przy ul.Dworcowej 6, oraz na naszym Facebooku i stronie internetowej.</p>

                                </Container>
                            </Content>
                        </>
                    }
                />
            </>
        );
    if (id === 'zyczenia-swiateczne')
        return (
            <>
                <Section
                    title={informationObject.title}
                    content={
                        <>
                            <Date>{informationObject.date}</Date>
                            <Content>
                                <Photo src={informationObject.photo} alt="Logo" />
                                <Container>
                                    <Bigger>Drodzy Pasażerowie,</Bigger><br />
                                    Z okazji Świąt Bożego Narodzenia oraz nadchodzącego Nowego Roku życzymy naszym Klientom i Współpracownikom chwil wytchnienia, dobrej energii i powodów do uśmiechu. Niech święta przyniosą spokój, a Nowy Rok nowe możliwości i spełnione plany. 🎄✨<br />
                                    <br />
                                    Przypominamy również o skróconym rozkładzie jazdy w dniach 24 i 31 grudnia 2025 roku:<br />
                                    <br />
                                    Wyjazdy z Moniek: 05:15, 07:25, 10:05, 12:20, 14:40<br />
                                    Wyjazdy z Białegostoku: 06:20, 08:35, 11:15, 13:35, 15:45<br />
                                    <br />
                                    <b> Wesołych Świąt i Szczęśliwego Nowego Roku!</b>
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
                                    🏫 Przypominamy dzieciom, młodzieży i ich rodzicom, że nowy rok szkolny rozpoczyna się już 1 września! To idealny moment, aby zadbać o zakup biletów miesięcznych!<br />
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
    if (id === 'wyjazd-na-litwe')
        return (
            <>
                <Section
                    title={informationObject.title}
                    content={
                        <>
                            <Date>{informationObject.date}</Date>
                            <Content>
                                <Photo src={informationObject.photo} alt="Plakat ogłoszeniowy" />
                                <Container>
                                    <b>KOWNO – KIEJDANY – WILNO – 2 dni pełne wrażeń</b>

                                    <p>📅 26–27 sierpnia 2025</p>
                                    <p><b>Cena:</b> 580 zł / osoba</p>

                                    <b>I DZIEŃ</b>
                                    <p>🔹 Wyjazd z Knyszyna i Białegostoku rano</p>
                                    <p>🔹 Kowno – ruiny zamku, Starówka, Bazylika św. Pawła i Piotra, „Biały Łabędź” (Ratusz), Dom Perkuna, Aleja Wolności, kościół św. Michała Archanioła</p>
                                    <p>🔹 Kiejdany – malownicze miasto nad Niewiażą, historia Radziwiłłów, gotyckie, renesansowe i barokowe budowle, pomnik Radziwiłłów</p>
                                    <p>🔹 Przyjazd do Wilna, obiadokolacja, nocleg w pokojach 2–3 osobowych z łazienkami</p>

                                    <b>II Dzień</b>
                                    <p>🔹 Śniadanie, wykwaterowanie</p>
                                    <p>🔹 Wilno z przewodnikiem: Ostra Brama, cerkiew św. Trójcy, Rynek, kościół św. Jana, Sanktuarium „Jezu Ufam Tobie”, kościół św. Ducha, kościół św. Anny, pomnik Mickiewicza, kościół św. Piotra i Pawła, cmentarz na Rossie, Mauzoleum „Matka i Serce Syna” i inne atrakcje</p>
                                    <p>🔹 Troki – czas wolny ok. 1,5 godziny</p>
                                    <p>🔹 Powrót wieczorem</p>

                                    <div>
                                        <p><b>Cena obejmuje:</b></p>
                                        <ul>
                                            <li> transport autokarem</li>
                                            <li> opłaty drogowe i parkingi</li>
                                            <li> ubezpieczenie krajowe i zagraniczne</li>
                                            <li> przewodnicy w Kownie i Wilnie</li>
                                            <li> 1 obiadokolacja</li>
                                            <li> 1 nocleg</li>
                                            <li> 1 śniadanie</li>
                                        </ul>
                                    </div>

                                    <p><b>Uwaga:</b> Kolejność zwiedzania może ulec zmianie.</p>
                                    <p>Dla chętnych – msza święta w Kownie i Wilnie.</p>

                                    <div>
                                        <b>📞 Zapisy i informacje:</b>
                                        <p>Tel: <a href="tel:+48515073556">515 073 556</a>, <a href="tel:+48506110923">506 110 923</a></p>
                                        <p>💵 <b>Zaliczka:</b> 200 zł do 17.08.2025</p>
                                    </div>
                                </Container>
                            </Content>
                        </>
                    }
                />
            </>
        );
    if (id === 'informacja-utrudnienia')
        return (
            <>
                <Section
                    title={informationObject.title}
                    content={
                        <>
                            <Date>{informationObject.date}</Date>
                            <Content>
                                <Photo src={informationObject.photo} alt="Logo" />
                                <Container>
                                    <b>Drodzy Pasażerowie!</b><br />
                                    <br />
                                    Informujemy, że w dniach <b>9 -10 lipca 2025 r.</b> w związku z planowanymi pracami
                                    drogowymi na ul. Goniądzkiej w Knyszynie mogą wystąpić czasowe utrudnienia w
                                    ruchu, w tym okresowe zamknięcie drogi tym samym brak możliwości obsługi
                                    przystanku <b>"Knyszyn - ul. Goniądzka"</b>.<br />
                                    <br />
                                    W związku z powyższym  prosimy o kierowanie się na przystanek :<br />
                                    👉 <b>Knyszyn - Rynek</b><br />
                                    <br />
                                    Dziękujemy za wyrozumiałość i przepraszamy za niedogodności.
                                </Container>
                            </Content>
                        </>
                    }
                />
            </>
        );
};

export default MessagePage;