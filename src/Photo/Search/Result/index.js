import React from 'react';
import { busStops } from '../BusStops.js';
import getVariant from './useGetVariant';
import { List, Item, Container, Heading, Span, ListContainer } from "./styled";


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
            <div>
                W tym dniu nie kursujemy.
            </div>
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

    if ((startStopObject.id === 19 || endStopObject.id === 19) && direction === "Białystok") {
        return (
            <Heading>
                <b>Nie ma takiego połączenia</b><br />
                <br />
                Autobusy z przystanku "Fasty Kombinat" odjeżdżają tylko w kierunku Moniek.
            </Heading>
        );
    }
    if ((startStopObject.id === 23 || endStopObject.id === 23) && direction === "Mońki") {
        return (
            <Heading>
                <b>Nie ma takiego połączenia</b><br />
                <br />
                Autobusy z przystanku "B-stok PKP" odjeżdżają tylko w kierunku Białegostoku.
            </Heading>
        );
    }
    const differenceInMinutes = calculateTimeDifference(startStopObject[variant][direction][0], endStopObject[variant][direction][0]);
    return (
        <Container>
            <Heading><b>{startStop} - {endStop}</b></Heading><br />
            <ListContainer>
                <List>
                    {startStopObject[variant][direction].map((item) => (
                        <Item>
                            {item}{" "}-{" "}
                            {endStopObject[variant][direction][startStopObject[variant][direction].indexOf(item)]}{" "}
                            <Span>({differenceInMinutes}min)</Span>
                        </Item>
                    ))}
                </List>
            </ListContainer>
        </Container>
    );
};

export default Result;