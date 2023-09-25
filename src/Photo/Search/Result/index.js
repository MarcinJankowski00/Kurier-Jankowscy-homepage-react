import React from 'react';
import { busStops } from 'C:/dev/kurier/src/BusStops.js';
import getVariant from './useGetVariant';
import FileDownloadButton from './FileDownloadButton';
import { List, Item, Container, Heading, Span, ListContainer, Div } from "./styled";


const calculateTimeDifference = (startHour, endHour) => {
    const [startHourStr, startMinStr] = startHour.split(":");
    const [endHourStr, endMinStr] = endHour.split(":");

    const startHourNum = parseInt(startHourStr, 10);
    const startMinNum = parseInt(startMinStr, 10);
    const endHourNum = parseInt(endHourStr, 10);
    const endMinNum = parseInt(endMinStr, 10);

    const startTotalMinutes = startHourNum * 60 + startMinNum;
    const endTotalMinutes = endHourNum * 60 + endMinNum;

    const timeDifference = endTotalMinutes - startTotalMinutes;

    return timeDifference;
};

const Result = ({ startStop, endStop, departureDate }) => {

    const variant = getVariant(departureDate);
    if (variant === 'brak') {
        return (
            <Heading empty>
                Tego dnia nie kursujemy.
            </Heading>
        );
    }

    const startStopObject = busStops.find((station) => station.name === startStop);
    const endStopObject = busStops.find((station) => station.name === endStop);
    let direction = "";

    if (startStopObject.id > endStopObject.id) {
        direction = "Mońki";
    } else {
        direction = "Białystok";
    }

    if ((startStopObject.id === 20 || endStopObject.id === 20) && direction === "Białystok") {
        return (
            <Heading>
                <b>Nie ma takiego połączenia</b><br />
                <br />
                Autobusy z przystanku "Fasty Kombinat" odjeżdżają tylko w kierunku Moniek.
            </Heading>
        );
    }
    if ((startStopObject.id === 24 || endStopObject.id === 24) && direction === "Mońki") {
        return (
            <Heading>
                <b>Nie ma takiego połączenia</b><br />
                <br />
                Autobusy z przystanku "B-stok PKP" odjeżdżają tylko w kierunku Białegostoku.
            </Heading>
        );
    }
    const departureDateStr = new Date(departureDate);
    const formattedDate = departureDateStr.toLocaleDateString();
    const differenceInMinutes = calculateTimeDifference(startStopObject[direction][0], endStopObject[direction][0]);
    return (
        <Container>
            <Heading>
                <b>{startStop} - {endStop}</b><br />
                <Span>{formattedDate}</Span>
            </Heading>
            <ListContainer>
                <List>
                    {startStopObject[direction].map((item) => {
                        if (variant === 'wariant1') {
                            return (
                                <Item>
                                    {item}{" "}-{" "}
                                    {endStopObject[direction][startStopObject[direction].indexOf(item)]}{" "}
                                    <Span>({differenceInMinutes}min)</Span>
                                </Item>
                            )
                        } else {
                            if (variant === 'wariant2') {
                                if (startStopObject[direction].indexOf(item) === 0 ||
                                    startStopObject[direction].indexOf(item) === 2 ||
                                    startStopObject[direction].indexOf(item) === 4 ||
                                    startStopObject[direction].indexOf(item) === 6 ||
                                    startStopObject[direction].indexOf(item) === 8 ||
                                    startStopObject[direction].indexOf(item) === 10 ||
                                    startStopObject[direction].indexOf(item) === 12 ||
                                    startStopObject[direction].indexOf(item) === 13) {
                                    return undefined;
                                } else {
                                    return (
                                        <Item>
                                            {item}{" "}-{" "}
                                            {endStopObject[direction][startStopObject[direction].indexOf(item)]}{" "}
                                            <Span>({differenceInMinutes}min)</Span>
                                        </Item>
                                    )
                                }
                            } else {
                                if (variant === 'wariant3') {
                                    if (startStopObject[direction].indexOf(item) === 0 ||
                                        startStopObject[direction].indexOf(item) === 1 ||
                                        startStopObject[direction].indexOf(item) === 2 ||
                                        startStopObject[direction].indexOf(item) === 4 ||
                                        startStopObject[direction].indexOf(item) === 6 ||
                                        startStopObject[direction].indexOf(item) === 8 ||
                                        startStopObject[direction].indexOf(item) === 10 ||
                                        startStopObject[direction].indexOf(item) === 12 ||
                                        startStopObject[direction].indexOf(item) === 13) {
                                        return undefined;
                                    } else {
                                        return (
                                            <Item>
                                                {item}{" "}-{" "}
                                                {endStopObject[direction][startStopObject[direction].indexOf(item)]}{" "}
                                                <Span>({differenceInMinutes}min)</Span>
                                            </Item>
                                        )
                                    }
                                } else {
                                    if (variant === 'wariant4') {
                                        if (startStopObject[direction].indexOf(item) === 0 ||
                                            startStopObject[direction].indexOf(item) === 2 ||
                                            startStopObject[direction].indexOf(item) === 4 ||
                                            startStopObject[direction].indexOf(item) === 6 ||
                                            startStopObject[direction].indexOf(item) === 8 ||
                                            startStopObject[direction].indexOf(item) === 10 ||
                                            startStopObject[direction].indexOf(item) === 11 ||
                                            startStopObject[direction].indexOf(item) === 12 ||
                                            startStopObject[direction].indexOf(item) === 13) {
                                            return undefined;
                                        } else {
                                            return (
                                                <Item>
                                                    {item}{" "}-{" "}
                                                    {endStopObject[direction][startStopObject[direction].indexOf(item)]}{" "}
                                                    <Span>({differenceInMinutes}min)</Span>
                                                </Item>
                                            )
                                        }
                                    } else {
                                        if (variant === 'wariant5') {
                                            if (startStopObject[direction].indexOf(item) === 0 ||
                                                startStopObject[direction].indexOf(item) === 1 ||
                                                startStopObject[direction].indexOf(item) === 2 ||
                                                startStopObject[direction].indexOf(item) === 4 ||
                                                startStopObject[direction].indexOf(item) === 6 ||
                                                startStopObject[direction].indexOf(item) === 8 ||
                                                startStopObject[direction].indexOf(item) === 10 ||
                                                startStopObject[direction].indexOf(item) === 11 ||
                                                startStopObject[direction].indexOf(item) === 12 ||
                                                startStopObject[direction].indexOf(item) === 13) {
                                                return undefined;
                                            } else {
                                                return (
                                                    <Item>
                                                        {item}{" "}-{" "}
                                                        {endStopObject[direction][startStopObject[direction].indexOf(item)]}{" "}
                                                        <Span>({differenceInMinutes}min)</Span>
                                                    </Item>
                                                )
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    })}
                </List>
            </ListContainer>
            <Div>
                <FileDownloadButton
                    filename="Rozkład przystanku.pdf"
                    src={startStopObject.download}
                />
            </Div>
        </Container>
    );
};

export default Result;