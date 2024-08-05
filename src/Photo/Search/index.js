import React, { useState, useEffect } from 'react';
import { Form, Container, Header, Element, Text, Select, Button, Wrapper, Switch, Div, DateDiv, Magnifiericon, Span, Switchicon, Input } from "./styled";
import Modal from "./Modal";
import Result from "./Result";
import { busStops } from 'C:/dev/kurier/src/BusStops.js';
import magnifiericon from "./magnifiericon.png";
import switchicon from "./switchicon.png";

const Search = () => {
    const [isModalOpen, setModalOpen] = useState("false");
    const openModal = () => {
        setModalOpen("true");
    };
    const closeModal = () => {
        setModalOpen("false");
    };

    const getInitialStartStop = () => {
        const localStorageStartStop = localStorage.getItem("startStop");
        if (localStorageStartStop === null) {
            return 'Mońki–Dworcowa';
        }
        return JSON.parse(localStorage.getItem("startStop"));
    };
    const getInitialEndStop = () => {
        const localStorageEndStop = localStorage.getItem("endStop");
        if (localStorageEndStop === null) {
            return 'Białystok PKS';
        }
        return JSON.parse(localStorage.getItem("endStop"));
    };

    const [startStop, setStartStop] = useState(getInitialStartStop);
    const [endStop, setEndStop] = useState(getInitialEndStop);

    useEffect(() => {
        localStorage.setItem("startStop", JSON.stringify(startStop));
        localStorage.setItem("endStop", JSON.stringify(endStop));
    });

    const [departureDate, setDepartureDate] = useState(new Date());

    const switchStops = () => {
        let holder = endStop;
        setEndStop(startStop);
        setStartStop(holder);
    };
    const formatDate = (date) => {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (day < 10) {
            day = `0${day}`;
        }
        if (month < 10) {
            month = `0${month}`;
        }
        return `${year}-${month}-${day}`;
    };

    const getNextDay = (date) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + 1);
        return newDate;
    };

    const handleDepartureDateChange = () => {
        setDepartureDate(getNextDay(departureDate));
    };


    return (
        <Form>
            <Container>
                <Header>Wyszukaj połączenie</Header>
                <Element>
                    <Wrapper>
                        <Div>
                            <label htmlFor="startStationSelect">
                                <Span>
                                    Z
                                </Span>
                                <Select
                                    id="startStationSelect"
                                    value={startStop}
                                    onChange={({ target }) => setStartStop(target.value)}
                                >
                                    {busStops.map((station) => (
                                        <option
                                            key={station.id}
                                            value={station.name}
                                        >
                                            {station.name}
                                        </option>
                                    ))}
                                </Select>
                            </label>
                            <label htmlFor="endStationSelect">
                                <Span>
                                    Do
                                </Span>
                                <Select
                                    id="endStationSelect"
                                    value={endStop}
                                    onChange={({ target }) => setEndStop(target.value)}
                                >
                                    {busStops.map((station) => (
                                        <option
                                            key={station.id}
                                            value={station.name}
                                        >
                                            {station.name}
                                        </option>
                                    ))}
                                </Select>
                            </label>
                        </Div>
                        <Switch onClick={switchStops}><Switchicon src={switchicon} /></Switch>
                    </Wrapper>
                    <DateDiv>
                        <label>
                            <Span />
                            <Input
                                type="Date"
                                value={formatDate(departureDate)}
                                onChange={(e) => 
                                    setDepartureDate(new Date(e.target.value))
                                }
                            />
                        </label>
                    </DateDiv>
                </Element>
                <Button onClick={openModal}><Text>Znajdź połączenie</Text> <Magnifiericon src={magnifiericon} /></Button>
            </Container>
            <Modal isopen={isModalOpen} onClose={closeModal}>
                <Result
                    startStop={startStop}
                    endStop={endStop}
                    departureDate={departureDate}
                    onNextDayButtonClick={handleDepartureDateChange}
                />
            </Modal>
        </Form>
    );
};

export default Search;