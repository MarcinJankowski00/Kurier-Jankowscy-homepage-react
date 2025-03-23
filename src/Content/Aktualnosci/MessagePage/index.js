import Section from "../../../Section";
import { news } from "../News";
import { Content, Container, Bigger, Date, Photo, Link } from "./styled";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const MessagePage = () => {
    const { id } = useParams();
    const informationObject = news.find((information) => information.id === id);
    if (id === 'wyjazd-na-litwe-2')
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
                                    <b>Zapraszamy na wycieczkę Kowno – Kiedany – Szawle – Wilno</b>

                                    <p>🗓 25-27 kwietnia 2025 (3 dni)</p>
                                    <p><b>Kowno</b> – ruiny zamku, Starówka, Bazylika Św. Pawła i Piotra, Ratusz „Biały Łabędź”, Dom Perkuna, Aleja Wolności</p>
                                    <p><b>Kiejdany</b> – miasto związane z Radziwiłłami, zabytkowe Stare Miasto, krypta Radziwiłłów</p>
                                    <p><b>Szawle</b> – słynna Góra Krzyży</p>
                                    <p><b>Wilno</b> – Ostra Brama, Cerkiew Św. Trójcy, Kościół Św. Anny, Cmentarz na Rossie, Mauzoleum „Matka i Serce Syna”</p>

                                    <b>🚌 Program wyjazdu:</b>
                                    <p><b>I dzień</b> – Kowno: zwiedzanie, czas wolny, obiadokolacja, nocleg</p>
                                    <p><b>II dzień</b> – Kiejdany, Szawle (Góra Krzyży), obiadokolacja, nocleg</p>
                                    <p><b>III dzień</b> – Wilno: zwiedzanie z przewodnikiem, powrót w godzinach wieczornych</p>
                                    <br />
                                    <div>
                                        <p>💰 <b>Cena</b>: 870 zł/os. + 10 EUR (bilety w Kiejdanach)</p>
                                        <p>Cena zawiera:</p>
                                        <ul>
                                            <li>Transport autokarem 🚌</li>
                                            <li>Ubezpieczenie kraj/zagranica</li>
                                            <li>2 noclegi 🛌</li>
                                            <li>2 śniadania i2 obiadokolacje 🍽️</li>
                                            <li>Usługi przewodników</li>
                                        </ul>
                                    </div>
                                    <p>❗️Zaliczka 200 zł – płatna do 8.04.2025</p>
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
    if (id === 'wyjazd-na-jarmark')
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
                                    <b>Zapraszamy na wycieczkę Wilno – Jarmark Kaziukowy</b>

                                    <p>📅 8 marca 2025 r. (sobota)</p>

                                    <b>Kaziuki</b>– kultowy wileński jarmark organizowany od setek lat w dniu św. Kazimierza. Urokliwe uliczki starówki wypełniają stragany z:
                                    <ul>
                                        <li>rękodziełem ludowym</li>
                                        <li>regionalnymi przysmakami</li>
                                        <li>tradycyjnymi palmami wileńskimi</li>
                                    </ul>

                                    <b>Program wyjazdu:</b>
                                    <ul>
                                        <li><b>5:00</b> – Wyjazd do Wilna</li>
                                        <li><b>11:00</b> (czasu litewskiego) – Zwiedzanie: Ostra Brama, Kaplica Ostrobramska, Cerkiew Św. Trójcy, Kościół Św. Piotra i Pawła, cmentarz na Rossie</li>
                                        <li>Pobyt na Jarmarku Kaziukowym – 2 godziny czasu wolnego</li>
                                        <li><b>14:30</b> – Przejazd do Trok: zwiedzanie Zamku Książąt Litewskich (z zewnątrz), spacer dzielnicą karaimską. Możliwość zamówienia obiadu karaimskiego (za dodatkową opłatą).</li>
                                        <li><b>17:00</b> – Wyjazd w drogę powrotną</li>
                                        <li><b>21:30</b> – Planowany powrót</li>
                                    </ul>

                                    <div>
                                        <b>W cenie 210 zł/os.:</b>
                                        <ul>
                                            <li>Transport autokarem</li>
                                            <li>Ubezpieczenie kraj/zagranica</li>
                                            <li>Usługi pilota i przewodnika</li>
                                        </ul>
                                    </div>
                                    <p>Dodatkowo: obiad w Trokach ok. 10 EUR (2 kibiny i rosół).</p>
                                    <div>
                                        <b>Kontakt i rezerwacje:</b>
                                        <p>Tel: <Link href="tel:+48515073556">+48 515 073 556</Link></p>
                                        <p>Email: <Link href="mailto:biuro@kurierjankowski.pl">biuro@kurierjankowski.pl</Link></p>
                                    </div>
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
                                    Z okazji Świąt Bożego Narodzenia oraz Nowego Roku życzymy naszym Klientom oraz Współpracownikom zdrowia, szczęścia i spełnienia marzeń. Niech ten czas będzie pełen spokoju, radości i rodzinnego ciepła. 🎄✨<br />
                                    <br />
                                    Przypominamy również o skróconym rozkładzie jazdy w dniach 24 i 31 grudnia 2024 roku:<br />
                                    <br />
                                    Wyjazdy z Moniek: 05:15, 07:25, 10:05, 12:20, 14:40<br />
                                    Wyjazdy z Białegostoku: 06:20, 08:35, 11:15, 13:35, 15:45<br />
                                    <br />
                                    <b>W dniu 24.12.2024 biuro będzie nieczynne.</b><br />
                                    <br />
                                    <b> Wesołych Świąt i Szczęśliwego Nowego Roku!</b>
                                </Container>
                            </Content>
                        </>
                    }
                />
            </>
        );
    if (id === 'nowy-autobus')
        return (
            <>
                <Section
                    title={informationObject.title}
                    content={
                        <>
                            <Date>{informationObject.date}</Date>
                            <Content>
                                <Photo src={informationObject.photo} alt="Autobus" />
                                <Container>
                                    <Bigger>Drodzy Pasażerowie,</Bigger>
                                    <p>Z radością informujemy, że od teraz na trasie Mońki - Białystok będzie kursował nasz nowy, nowoczesny autobus Iveco Crossway!</p>
                                    <p>Nowy pojazd to ulepszona wersja obecnie używanych autobusów, oferująca większy komfort i udogodnienia dla naszych pasażerów.</p>
                                    <Bigger>Co nowego?</Bigger>
                                    <ul>
                                        <li>System ADAS – Zaawansowany system, który analizuje sytuację na drodze i dba o bezpieczeństwo. Funkcje, takie jak awaryjne hamowanie, monitorowanie martwego pola i rozpoznawanie znaków, wspierają kierowcę w czasie rzeczywistym. </li>
                                        <li>Gniazdka USB - dzięki czemu możesz naładować swój telefon lub inne urządzenia mobilne w trakcie podróży.</li>
                                        <li>Większy komfort podróży – nowoczesne, ergonomiczne siedzenia i wydajna klimatyzacja.</li>
                                        <li>Ciche i płynne działanie – zapewniające jeszcze bardziej przyjemną podróż.</li>
                                    </ul>
                                    <p>Zapraszamy do wypróbowania naszego nowego autobusu!</p>
                                </Container>
                            </Content>
                        </>
                    }
                />
            </>
        );
    if (id === 'przypomnienie-bilety')
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
                                <Photo src={informationObject.photo} alt="Plakat ogłoszeniowy" />
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
};

export default MessagePage;