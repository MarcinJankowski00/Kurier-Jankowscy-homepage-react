import { List, Item, Container, Heading, Span, ListContainer, Text, ShowButton, Empty, NextDayButton, Price, Label } from "./styled";
import { useState, useEffect } from 'react';
import GetResult from './useGetResult';
import GenericDropdown from "../../../GenericDropdown";
import { useData } from "../../../context/DataContext";


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
    const { stops, prices, reliefs } = useData();
    const [isShowed, setIsShowed] = useState(false);
    const [relief, setRelief] = useState(0);
    const [typeOfTicket, setTypeOfTicket] = useState("normal");
    const [selectedTypeOfTicket, setSelectedTypeOfTicket] = useState({ name: "Jednorazowy", value: "normal" });
    const [direction, setDirection] = useState('one-way');
    const filteredReliefs = reliefs.filter(r => r.type === typeOfTicket);
    const [selectedRelief, setSelectedRelief] = useState(filteredReliefs[0]);
    const result = GetResult(departureDate, startStop, endStop);
    const startStopObject = result.startStopTab;
    const endStopObject = result.endStopTab;

    const getTicketPrice = (startStop, endStop, relief, typeOfTicket, direction) => {
        const startStopObject = stops.find((station) => station.name === startStop);
        const endStopObject = stops.find((station) => station.name === endStop);
        const startIndex = startStopObject.id - 1;
        const endIndex = endStopObject.id - 1;
        if (startIndex === -1 || endIndex === -1) return null;
        if (typeOfTicket === "normal") {
            const type = "normal";
            const monthlyRelief = prices.find(r => r.type === type);
            return (monthlyRelief.value[startIndex][endIndex] * (1 - relief)).toFixed(2);
        } else {
            const type = direction === 'one-way' ? "monthly" : "monthlyRoundTrip";
            const monthlyRelief = prices.find(r => r.type === type);
            return (monthlyRelief.value[startIndex][endIndex] * (1 - relief)).toFixed(2);
        }
    };

    const handleChange = (e) => {
        setDirection(e.target.value);
    }

    useEffect(() => {
        if (selectedRelief?.value !== undefined) {
            setRelief(Number(selectedRelief.value));
        }
    }, [selectedRelief])

    useEffect(() => {
        if (selectedTypeOfTicket?.value !== undefined) {
            setTypeOfTicket(String(selectedTypeOfTicket.value));
            setSelectedRelief(filteredReliefs[0]);
            setDirection("one-way")
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
                    <span>Cena biletu: <b>{getTicketPrice(startStop, endStop, relief, typeOfTicket, direction)} zł</b></span>
                    <Label htmlFor="reliefSelect">
                        <GenericDropdown
                            items={filteredReliefs}
                            selected={selectedRelief}
                            onSelect={setSelectedRelief}
                            getLabel={(item) => item.name}
                            getRightContent={(item) => `(${item.value * 100}%)`}
                            getTooltip={(item) => item.description}
                        />
                    </Label>
                    <Label htmlFor="typeOfTicketSelect">
                        <GenericDropdown
                            items={[{ name: "Jednorazowy", value: "normal" }, { name: "Miesięczny", value: "monthly" }]}
                            selected={selectedTypeOfTicket}
                            onSelect={setSelectedTypeOfTicket}
                            getLabel={(item) => item.name}
                        />
                    </Label>
                    {typeOfTicket === "monthly" ?
                        <Label>
                            <label>
                                <input
                                    type="radio"
                                    name="direction"
                                    value="one-way"
                                    checked={direction === 'one-way'}
                                    onChange={handleChange}
                                />
                                TAM
                            </label>
                            <label style={{ marginLeft: '1rem' }}>
                                <input
                                    type="radio"
                                    name="direction"
                                    value="round-trip"
                                    checked={direction === 'round-trip'}
                                    onChange={handleChange}
                                />
                                TAM/POWRÓT
                            </label>
                        </ Label> : ""
                    }
                </Price>
                <NextDayButton onClick={onNextDayButtonClick}>
                    Następny dzień
                </NextDayButton>
            </ListContainer>
        </Container>
    );
};

export default Result;