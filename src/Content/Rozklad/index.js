import FileDownloadButton from "../../FileDownloadButton";
import { Content, Wrapper, TableContainer, Table, Cell, Text, Row, } from "./styled";
import { busStops } from 'C:/dev/kurier/src/BusStops.js';
import rozkladJazdy from 'C:/dev/kurier/src/RozkładJazdy.pdf';

const Rozklad = () => {
    const reverseBusStops = [...busStops];
    reverseBusStops.reverse()
    return (
        <Content>
            <Wrapper>
                Godziny odjazdu do <strong>BIAŁEGOSTOKU</strong><br />
                Rozkład jazdy ważny od <strong>01.12.2023</strong>
            </Wrapper>
            <TableContainer>
                <Table>
                    <thead>
                        <Row>
                            <Cell scope="col" header="true">
                                PRZYSTANKI
                            </Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">E</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">d</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">d</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">d</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">d</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">d, n </Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                        </Row>
                    </thead>
                    <tbody>
                        {busStops.map((item) => {
                            if (item.id === 20) {
                                return undefined;
                            } else {
                                return (
                                    <Row>
                                        <Cell scope="row" header="true" name="true">
                                            {item.name}
                                        </Cell>
                                        <Cell>{item.Białystok[0]}</Cell>
                                        <Cell>{item.Białystok[1]}</Cell>
                                        <Cell>{item.Białystok[2]}</Cell>
                                        <Cell>{item.Białystok[3]}</Cell>
                                        <Cell>{item.Białystok[4]}</Cell>
                                        <Cell>{item.Białystok[5]}</Cell>
                                        <Cell>{item.Białystok[6]}</Cell>
                                        <Cell>{item.Białystok[7]}</Cell>
                                        <Cell>{item.Białystok[8]}</Cell>
                                        <Cell>{item.Białystok[9]}</Cell>
                                        <Cell>{item.Białystok[10]}</Cell>
                                        <Cell>{item.Białystok[11]}</Cell>
                                        <Cell>{item.Białystok[12]}</Cell>
                                        <Cell>{item.Białystok[13]}</Cell>
                                    </Row>
                                )
                            }
                        })}
                    </tbody>
                </Table>
            </TableContainer>
            <Text>
                d-  nie kursuje w dniu 1. I, w pierwszy i drugi dzień Świąt Wielkanocnych oraz w dniach 25. i 26. XII <br />
                D - kursuje od poniedziałku do piątku oprócz świąt<br />
                E – kursuje od poniedziałku do soboty oprócz świąt<br />
                n - nie kursuje w Wielką Sobotę oraz w dniach 24 i 31.XII <br />
                z - nie kursuje w piątek po dniu Bożego Ciała<br />
            </Text>
            <Wrapper>
                Godziny odjazdu do <b>MONIEK</b><br />
                Rozkład jazdy ważny od <strong>01.12.2023</strong>
            </Wrapper>
            <TableContainer>
                <Table>
                    <thead>
                        <Row>
                            <Cell scope="col" header="true">
                                PRZYSTANKI
                            </Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">E</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">d</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">d</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">d</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">d</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">d, n</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                            <Cell scope="col" header="true">D, z, n</Cell>
                        </Row>
                    </thead>
                    <tbody>
                        {reverseBusStops.map((item) => {
                            if (item.id === 24) {
                                return undefined;
                            } else {
                                return (
                                    <Row>
                                        <Cell scope="row" header="true" name="true">
                                            {item.name}
                                        </Cell>
                                        <Cell>{item.Mońki[0]}</Cell>
                                        <Cell>{item.Mońki[1]}</Cell>
                                        <Cell>{item.Mońki[2]}</Cell>
                                        <Cell>{item.Mońki[3]}</Cell>
                                        <Cell>{item.Mońki[4]}</Cell>
                                        <Cell>{item.Mońki[5]}</Cell>
                                        <Cell>{item.Mońki[6]}</Cell>
                                        <Cell>{item.Mońki[7]}</Cell>
                                        <Cell>{item.Mońki[8]}</Cell>
                                        <Cell>{item.Mońki[9]}</Cell>
                                        <Cell>{item.Mońki[10]}</Cell>
                                        <Cell>{item.Mońki[11]}</Cell>
                                        <Cell>{item.Mońki[12]}</Cell>
                                        <Cell>{item.Mońki[13]}</Cell>
                                    </Row>
                                )
                            }
                        })}
                    </tbody>
                </Table>
            </TableContainer>
            <Text>
                d-  nie kursuje w dniu 1. I, w pierwszy i drugi dzień Świąt Wielkanocnych oraz w dniach 25. i 26. XII<br />
                D - kursuje od poniedziałku do piątku oprócz świąt<br />
                E – kursuje od poniedziałku do soboty oprócz świąt<br />
                n - nie kursuje w Wielką Sobotę oraz w dniach 24 i 31.XII <br />
                z - nie kursuje w piątek po dniu Bożego Ciała<br />
            </Text>
            <FileDownloadButton
                filename="Rozkład Jazdy.pdf"
                src={rozkladJazdy}
                variant="schedule"
                label="Pobierz rozkład jazdy"
            />
        </Content>

    )
};

export default Rozklad;