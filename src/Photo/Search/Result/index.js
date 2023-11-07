import React from 'react';
import { busStops } from 'C:/dev/kurier/src/BusStops.js';
import getVariant from './useGetVariant';
import FileDownloadButton from './FileDownloadButton';
import { List, Item, Container, Heading, Span, ListContainer, Div, DepartureTime, ShowButton, Empty } from "./styled";
import { useState } from 'react';


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

const getActualHour = () => {
    const actualDate = new Date();
    var hour = actualDate.getHours();
    var minutes = actualDate.getMinutes();
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    const actualHour = hour + ":" + minutes;
    return actualHour;
}

const isDateNotActual = (formattedDate) => {
    const actualDate = new Date();
    const formattedActualDate = actualDate.toLocaleDateString();
    if (formattedDate === formattedActualDate) {
        return false;
    } else {
        return true;
    }
}

const formatToHHMM = (myHour) => {
    const parts = myHour.split(":");
    const hourWithoutZero = parseInt(parts[0], 10);
    const myHourHHMM = (hourWithoutZero < 10 ? "0" : "") + hourWithoutZero + ":" + parts[1];
    return myHourHHMM
}

const howManyMinutesToDeparture = (object, variant) => {
    const actualHour = getActualHour();
    var result = -1;
    if (variant === 'wariant1') {
        for (var i = 0; i < 14; i++) {
            if (formatToHHMM(object[i]) >= actualHour) {
                result = calculateTimeDifference(actualHour, object[i]);
                i = 14;
            }
        };
        return result;
    } else {
        if (variant === 'wariant2') {
            for (i = 0; i < 14; i++) {
                if (formatToHHMM(object[i]) >= actualHour && (
                    i !== 0 &&
                    i !== 2 &&
                    i !== 4 &&
                    i !== 6 &&
                    i !== 8 &&
                    i !== 10 &&
                    i !== 12 &&
                    i !== 13)) {
                    result = calculateTimeDifference(actualHour, object[i]);
                    i = 14;
                }
            };
            return result;
        } else {
            if (variant === 'wariant3') {
                for (i = 0; i < 14; i++) {
                    if (formatToHHMM(object[i]) >= actualHour && (
                        i !== 0 &&
                        i !== 1 &&
                        i !== 2 &&
                        i !== 4 &&
                        i !== 6 &&
                        i !== 8 &&
                        i !== 10 &&
                        i !== 12 &&
                        i !== 13)) {
                        result = calculateTimeDifference(actualHour, object[i]);
                        i = 14;
                    }
                };
                return result;
            } else {
                if (variant === 'wariant4') {
                    for (i = 0; i < 14; i++) {
                        if (formatToHHMM(object[i]) >= actualHour && (
                            i !== 0 &&
                            i !== 2 &&
                            i !== 4 &&
                            i !== 6 &&
                            i !== 8 &&
                            i !== 10 &&
                            i !== 11 &&
                            i !== 12 &&
                            i !== 13)) {
                            result = calculateTimeDifference(actualHour, object[i]);
                            i = 14;
                        }
                    };
                    return result;
                } else {
                    if (variant === 'wariant5') {
                        for (i = 0; i < 14; i++) {
                            if (formatToHHMM(object[i]) >= actualHour && (
                                i !== 0 &&
                                i !== 1 &&
                                i !== 2 &&
                                i !== 4 &&
                                i !== 6 &&
                                i !== 8 &&
                                i !== 10 &&
                                i !== 11 &&
                                i !== 12 &&
                                i !== 13)) {
                                result = calculateTimeDifference(actualHour, object[i]);
                                i = 14;
                            }
                        };
                        return result;
                    }
                }
            }
        }
    }
}

const Result = ({ startStop, endStop, departureDate }) => {
    const [isShowed, setIsShowed] = useState(false);

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

    const isPast = (myHour, formattedDate) => {
        const actualDate = new Date();
        const formattedActualDate = actualDate.toLocaleDateString();
        if (formattedDate !== formattedActualDate) {
            return false;
        }
        if (formatToHHMM(myHour) < getActualHour()) {
            return true;
        } else {
            return false;
        }
    }



    return (
        <Container>
            <Heading>
                <b>{startStop} - {endStop}</b><br />
                <Span>{formattedDate}</Span>
                <br />
                <DepartureTime isdateactual={(howManyMinutesToDeparture(startStopObject[direction], variant) === -1) && !(isDateNotActual(formattedDate))}>
                    <br />Najbliższy odjazd za <b>{howManyMinutesToDeparture(startStopObject[direction], variant)}min</b>
                </DepartureTime>
                <Span><br />Czas przejazdu: {differenceInMinutes}min</Span><br />
                <ShowButton
                    isdateactual={isDateNotActual(formattedDate)}
                    onClick={() => (isShowed ? setIsShowed(false) : setIsShowed(true))}>
                    {(isShowed ? "Ukryj poprzednie" : "Pokaż poprzednie")}
                </ShowButton>
            </Heading>
            <ListContainer>
                <List>
                    {startStopObject[direction].map((item) => {
                        if (variant === 'wariant1') {
                            return (
                                <Item past={isPast(item, formattedDate)} show={isShowed}>
                                    {item}{" "}-{" "}
                                    {endStopObject[direction][startStopObject[direction].indexOf(item)]}{" "}
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
                                        <Item past={isPast(item, formattedDate)} show={isShowed}>
                                            {item}{" "}-{" "}
                                            {endStopObject[direction][startStopObject[direction].indexOf(item)]}{" "}
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
                                            <Item past={isPast(item, formattedDate)} show={isShowed}>
                                                {item}{" "}-{" "}
                                                {endStopObject[direction][startStopObject[direction].indexOf(item)]}{" "}
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
                                                <Item past={isPast(item, formattedDate)} show={isShowed}>
                                                    {item}{" "}-{" "}
                                                    {endStopObject[direction][startStopObject[direction].indexOf(item)]}{" "}
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
                                                    <Item past={isPast(item, formattedDate)} show={isShowed}>
                                                        {item}{" "}-{" "}
                                                        {endStopObject[direction][startStopObject[direction].indexOf(item)]}{" "}
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
                <Empty show={(!isShowed)&&(howManyMinutesToDeparture(startStopObject[direction], variant) === -1) && !(isDateNotActual(formattedDate))}>
                    ...Brak kursów
                </Empty>
            </ListContainer>
            <Div>
                <FileDownloadButton
                    filename={startStopObject.name + " - Rozkład przystanku.pdf"}
                    src={startStopObject.download}
                />
            </Div>
        </Container>
    );
};

export default Result;