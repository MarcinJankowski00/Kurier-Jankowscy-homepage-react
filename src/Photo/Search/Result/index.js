import { List, Item, Container, Heading, Span, ListContainer, Text, ShowButton, Empty, NextDayButton, Price, Label, Select } from "./styled";
import { useState, useEffect } from 'react';
import getResult from './useGetResult';
import { busStops } from '../../../BusStops';
import { priceMatrix } from '../../../Prices';
import { reliefs } from '../../../Reliefs';
import GenericDropdown from "../../../GenericDropdown";


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

const getTicketPrice = (startStop, endStop, relief, typeOfTicket) => {
    const startStopObject = busStops.find((station) => station.name === startStop);
    const endStopObject = busStops.find((station) => station.name === endStop);
    const startIndex = startStopObject.id - 1;
    const endIndex = endStopObject.id - 1;
    if (startIndex === -1 || endIndex === -1) return null; // przystanek nie istnieje
    return (priceMatrix[typeOfTicket][startIndex][endIndex] * (1 - relief)).toFixed(2);
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
    const [relief, setRelief] = useState(0);
    const [selectedRelief, setSelectedRelief] = useState(reliefs["else"][0]);
    const [typeOfTicket, setTypeOfTicket] = useState("normal");
    const [selectedTypeOfTicket, setSelectedTypeOfTicket] = useState({ name: "Jednorazowy", value:"normal" });
    const result = getResult(departureDate, startStop, endStop);
    const startStopObject = result.startStopTab;
    const endStopObject = result.endStopTab;

    useEffect(() => {
        if (selectedRelief?.value !== undefined) {
            setRelief(Number(selectedRelief.value));
        }
    }, [selectedRelief])

    useEffect(() => {
        if (selectedTypeOfTicket?.value !== undefined) {
            setTypeOfTicket(String(selectedTypeOfTicket.value));
            setSelectedRelief(reliefs["else"][0]);
        }
    }, [selectedTypeOfTicket])

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
                <Text show={(minutesToDeparture !== -1) && !(isDateNotActual(formattedDate))}>
                    <br />Najbliższy odjazd za <b>{minutesToDeparture}min</b>
                </Text>
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
                            <Item key={item} past={isPast(item, formattedDate)} show={isShowed}>
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
                <Price show={true}>
                    <span>Cena biletu: <b>{getTicketPrice(startStop, endStop, relief, typeOfTicket)} zł</b></span>
                    <Label htmlFor="reliefSelect">
                        <GenericDropdown
                            items={reliefs[typeOfTicket]}
                            selected={selectedRelief}
                            onSelect={setSelectedRelief}
                            getLabel={(item) => item.name}
                            getRightContent={(item) => `(${item.value * 100}%)`}
                            getTooltip={(item) => item.description}
                        />
                    </Label>
                    <Label htmlFor="typeOfTicketSelect">
                        <GenericDropdown
                            items={[{ name: "Jednorazowy", value:"normal" }, { name: "Miesięczny", value:"monthly" }]}
                            selected={selectedTypeOfTicket}
                            onSelect={setSelectedTypeOfTicket}
                            getLabel={(item) => item.name}
                        />
                    </Label>
                </Price>
                <NextDayButton onClick={onNextDayButtonClick}>
                    Następny dzień
                </NextDayButton>
            </ListContainer>
        </Container>
    );
};

export default Result;