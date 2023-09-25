import { Content, TableContainer, Table, Cell, Text, Row, } from "./styled";
import { busStops } from 'C:/dev/kurier/src/BusStops.js';
import FileDownloadButton from './FileDownloadButton';
import rozkladJazdy from 'C:/dev/kurier/src/RozkładJazdy.pdf';

const Rozklad = () => {
    const reverseBusStops = [...busStops];
    reverseBusStops.reverse()
    return(
    <Content>
        <div>
            <p>
                UWAGA NOWY ROZKŁAD!<br />
                Godziny odjazdu do <strong>BIAŁEGOSTOKU</strong><br />
                Rozkład jazdy ważny od <strong>01.07.2023</strong>
            </p>
        </div>
        <TableContainer>
            <Table>
                <thead>
                    <Row>
                        <Cell scope="col" header="true">
                            PRZYSTANKI
                        </Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">E</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">d</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">d</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">d</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">d</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">d,m </Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                    </Row>
                </thead>
                <tbody>
                    {busStops.map((item) => {
                        if (item.id === 20) {
                            return undefined;
                        } else {
                            return (
                                <Row>
                            <Cell scope="row" header="true">
                                {item.name}
                            </Cell>
                            <Cell>{item.wariant1.Białystok[0]}</Cell>
                            <Cell>{item.wariant1.Białystok[1]}</Cell>
                            <Cell>{item.wariant1.Białystok[2]}</Cell>
                            <Cell>{item.wariant1.Białystok[3]}</Cell>
                            <Cell>{item.wariant1.Białystok[4]}</Cell>
                            <Cell>{item.wariant1.Białystok[5]}</Cell>
                            <Cell>{item.wariant1.Białystok[6]}</Cell>
                            <Cell>{item.wariant1.Białystok[7]}</Cell>
                            <Cell>{item.wariant1.Białystok[8]}</Cell>
                            <Cell>{item.wariant1.Białystok[9]}</Cell>
                            <Cell>{item.wariant1.Białystok[10]}</Cell>
                            <Cell>{item.wariant1.Białystok[11]}</Cell>
                            <Cell>{item.wariant1.Białystok[12]}</Cell>
                            <Cell>{item.wariant1.Białystok[13]}</Cell>
                        </Row>
                            )
                        }
                    })}
                </tbody>
            </Table>
        </TableContainer>
        <br />
        <Text>
            d-  nie kursuje w dniu 1. I, w pierwszy i drugi dzień Świąt Wielkanocnych oraz w dniach 25. i 26. XII <br />
            D - kursuje od poniedziałku do piątku oprócz świąt<br />
            E – kursuje od poniedziałku do soboty oprócz świąt<br />
            m - nie kursuje w dniach 24. i 31. XII<br />
            z - nie kursuje w piątek po dniu Bożego Ciała<br />
            K - nie kursuje w dniu 2. V<br />
        </Text>
        <br />
        <br />
        UWAGA NOWY ROZKŁAD!<br />
        Godziny odjazdu do <b>MONIEK</b><br />
        Rozkład jazdy ważny od <strong>01.07.2023</strong><br />
        <br />
        <TableContainer>
            <Table>
                <thead>
                    <Row>
                        <Cell scope="col" header="true">
                            PRZYSTANKI
                        </Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">E</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">d</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">d</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">d</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">d</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">d, m</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                        <Cell scope="col" header="true">D, m,<br />
                            z, K</Cell>
                    </Row>
                </thead>
                <tbody>
                    {reverseBusStops.map((item) => {
                        if (item.id === 24) {
                            return undefined;
                        } else {
                            return (
                                <Row>
                            <Cell scope="row" header="true">
                                {item.name}
                            </Cell>
                            <Cell>{item.wariant1.Mońki[0]}</Cell>
                            <Cell>{item.wariant1.Mońki[1]}</Cell>
                            <Cell>{item.wariant1.Mońki[2]}</Cell>
                            <Cell>{item.wariant1.Mońki[3]}</Cell>
                            <Cell>{item.wariant1.Mońki[4]}</Cell>
                            <Cell>{item.wariant1.Mońki[5]}</Cell>
                            <Cell>{item.wariant1.Mońki[6]}</Cell>
                            <Cell>{item.wariant1.Mońki[7]}</Cell>
                            <Cell>{item.wariant1.Mońki[8]}</Cell>
                            <Cell>{item.wariant1.Mońki[9]}</Cell>
                            <Cell>{item.wariant1.Mońki[10]}</Cell>
                            <Cell>{item.wariant1.Mońki[11]}</Cell>
                            <Cell>{item.wariant1.Mońki[12]}</Cell>
                            <Cell>{item.wariant1.Mońki[13]}</Cell>
                        </Row>
                            )
                        }
                    })}
                </tbody>
            </Table>
        </TableContainer>
        <br />
        <Text>
            d-  nie kursuje w dniu 1. I, w pierwszy i drugi dzień Świąt Wielkanocnych oraz w dniach 25. i 26. XII<br />
            D - kursuje od poniedziałku do piątku oprócz świąt<br />
            E – kursuje od poniedziałku do soboty oprócz świąt<br />
            m - nie kursuje w dniach 24. i 31. XII<br />
            z - nie kursuje w piątek po dniu Bożego Ciała<br />
            K - nie kursuje w dniu 2. V<br />
        </Text>
        <FileDownloadButton
            filename="Rozkład Jazdy.pdf"
            src={rozkladJazdy}
        />
    </Content>

)};

export default Rozklad;