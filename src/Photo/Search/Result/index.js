import React from 'react';
import { List, Item, Container, Heading, Span, ListContainer, DepartureTime, ShowButton, Empty, NextDayButton } from "./styled";
import { useState } from 'react';
import getResult from './useGetResult';


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

const howManyMinutesToDeparture = (object) => {
    const actualHour = getActualHour();
    var result = -1;
    for (var i = 0; i < object.length; i++) {
        if (formatToHHMM(object[i]) >= actualHour) {
            result = calculateTimeDifference(actualHour, object[i]);
            i = 14;
        }
    };
    return result;
};

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
};

const Result = ({ startStop, endStop, departureDate, onNextDayButtonClick }) => {
    const [isShowed, setIsShowed] = useState(false);
    const result = getResult(departureDate, startStop, endStop);
    const startStopObject = result.startStopTab;
    const endStopObject = result.endStopTab;
    
    if (result === 'brak') {
        return (
            <Heading empty>
                Tego dnia nie kursujemy.
            </Heading>
        );
    }

    if (result === 'errorFasty') {
        return (
            <Heading>
                <b>Nie ma takiego połączenia</b><br />
                <br />
                Autobusy z przystanku "Fasty Kombinat" odjeżdżają tylko w kierunku Moniek.
            </Heading>
        );
    }
    if (result === 'errorB-stokPKP') {
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
    const differenceInMinutes = calculateTimeDifference(startStopObject[0], endStopObject[0]);
    const minutesToDeparture = howManyMinutesToDeparture(startStopObject);
    return (
        <Container>
            <Heading>
                <b>{startStop} - {endStop}</b><br />
                <Span>{formattedDate}</Span>
                <br />
                <DepartureTime show={(minutesToDeparture !== -1) && !(isDateNotActual(formattedDate))}>
                    <br />Najbliższy odjazd za <b>{minutesToDeparture}min</b>
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
                    {startStopObject.map((item) => {
                            return (
                                <Item past={isPast(item, formattedDate)} show={isShowed}>
                                    {item}{" "}-{" "}
                                    {endStopObject[startStopObject.indexOf(item)]}{" "}
                                </Item>
                            )
                        })
                    }
                </List>
                <Empty show={(!isShowed) && (minutesToDeparture === -1) && !(isDateNotActual(formattedDate))}>
                    ...Brak kursów
                </Empty>
                <NextDayButton onClick={onNextDayButtonClick}>
                    Następny dzień
                </NextDayButton>
            </ListContainer>
        </Container>
    );
};

export default Result;